use std::fmt;
use buffer::*;
use codecs::{Codec, AudioCodec};
use error::{AudioResult, AudioError};

pub struct LPCM;

/*
enum PcmSample {
  8Bit(u8),       // range = 128
  16Bit(i16),     // range = 32768
  24Bit(i32),     // range = 8388608
  32Bit(i32)      // range = 2147483648 
}
*/

impl AudioCodec for LPCM{
  fn read(bytes: &mut Vec<u8>, bit_rate: &u32, channels: &u32) -> AudioResult<Vec<Sample>> {
    // Assuming bytes is in little-endian format from WAV
    let block_size = (bit_rate / 8u32 * channels) as usize;
    let num_of_frames: usize = bytes.len() / block_size;
    let mut samples: Vec<f64> = Vec::with_capacity(num_of_frames * *channels as usize);
    let mut i = 0;
    match *bit_rate as usize {
      8   => {
        for sample in bytes.iter() {
           samples.push((*sample as f64 - 128f64) / 128f64);
        }
      },
      16  => {
        let mut sample: i16 = 0i16;
        let range: f64 = i16::max_value() as f64 + 1f64;
        for sample_bytes in bytes.chunks(block_size / *channels as usize) {
          i = 0;
          for byte in sample_bytes.iter() {
            sample = sample | (*byte as i16) << ((sample_bytes.len() - i - 1) * 8);
            i += 1;
          }
          sample.swap_bytes();  // convert to big endian
          samples.push(sample as f64 / range);
          sample = sample ^ sample; // clear sample value
        }
      },
      24  => {
        let mut sample: i32 = 0i32;
        let range: f64 = 8388608f64;
        for sample_bytes in bytes.chunks(block_size / *channels as usize) {
          i = 0;
          for byte in sample_bytes.iter() {
            sample = sample | (*byte as i32) << ((sample_bytes.len() - i - 1) * 8);
            i += 1;
          }
          sample.swap_bytes();  // convert to big endian
          samples.push(sample as f64 / range);
          sample = sample ^ sample; // clear sample value
        }
      },
      32  => {
        let mut sample: i32 = 0i32;
        let range: f64 = i32::max_value() as f64 + 1f64;
        for sample_bytes in bytes.chunks(block_size / *channels as usize) {
          i = 0;
          for byte in sample_bytes.iter() {
            sample = sample | (*byte as i32) << ((sample_bytes.len() - i - 1) * 8);
            i += 1;
          }
          sample.swap_bytes();  // convert to big endian
          samples.push(sample as f64 / range);
          sample = sample ^ sample; // clear sample value
        }
      },
      _   => return Err(AudioError::UnsupportedError(format!("Cannot read {}-bit LPCM", bit_rate)))
    }
    Ok(samples)
  }
}

#[test]
fn test_bytes_to_sample() {
  let bytes1: &[u8] = &[0x51, 0xB0];
  let mut sample1: i16 = 0i16;
  sample1 = (bytes1[1] as i16) << 8 |  bytes1[0] as i16;
  assert_eq!(-20399i16, sample1);
  assert_eq!(20912i16, sample1.swap_bytes());
  sample1 = sample1 ^ sample1;
  assert_eq!(0i16, sample1);

  println!("");
  let mut i = 0;
  for byte in bytes1.iter() {
    sample1 = sample1 | (*byte as i16) << ((bytes1.len() - i - 1) * 8);
    i += 1;
    println!("{:?} ({:x})", sample1, sample1);
  }
  assert_eq!(20912i16, sample1);
  assert_eq!(-20399i16, sample1.swap_bytes());
  sample1 = sample1 ^ sample1;
  assert_eq!(0i16, sample1);

  let bytes2: &[u8] = &[0xE5, 0xA8, 0x6D];
  let mut sample2: i32 = 0i32;
  i = 0;
  println!("");
  for byte in bytes2.iter() {
    sample2 = sample2 | (*byte as i32) << ((bytes2.len() - i - 1) * 8);
    i += 1;
    println!("{:?} ({:x})", sample2, sample2);
  }
  assert_eq!(15050861i32, sample2);
  assert_eq!(1839785216i32, sample2.swap_bytes());
  sample2 = sample2 ^ sample2;
  assert_eq!(0i32, sample2);

  let bytes3: &[u8] = &[0x9D, 0x25, 0x81, 0x2B];
  let mut sample3: i32 = 0i32;
  i = 0;
  println!("");
  for byte in bytes3.iter() {
    sample3 = sample3 | (*byte as i32) << ((bytes3.len() - i - 1) * 8);
    i += 1;
    println!("{:?} ({:x})", sample3, sample3);
  }
  assert_eq!(-1658486485i32, sample3);
  assert_eq!(729884061i32, sample3.swap_bytes());
  sample3 = sample3 ^ sample3;
  assert_eq!(0i32, sample3);
}