pub mod chunk;
pub mod decoder;
pub mod encoder;

// Hex constants are stored, read, and written as little endian
const RIFF: u32 = 0x46464952;
const WAVE: u32 = 0x45564157;
const FMT:	u32 = 0x20746D66;
const DATA: u32 = 0x61746164;

#[cfg(test)]
mod tests {
	#[test]
	fn test_read_write_eq() {
		use super::*;
		// Stereo
		let data = "Warrior Concerto - no meta.wav";
		let mut audio = decoder::read_file(data).unwrap();
		let total_samples = audio.samples.len();
		let channels = audio.num_of_channels;
		let bit_rate = audio.bit_rate;
		let sample_rate = audio.sampling_rate;

		let written = encoder::write_file(audio, "tmp.wav").unwrap();
		assert!(written);

		let verify = decoder::read_file("tmp.wav").unwrap();

		// Assert written file is same length as read file!
		assert_eq!(total_samples, verify.samples.len());
		assert_eq!(channels, verify.num_of_channels);
		assert_eq!(bit_rate, verify.bit_rate);
		assert_eq!(sample_rate, verify.sampling_rate);
	}
}