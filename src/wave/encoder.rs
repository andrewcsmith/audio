use std::io::Write;
use buffer::AudioBuffer;
use codecs::Codec;
use codecs::Codec::LPCM_I16_LE;
use error::AudioResult;
use traits::{AudioEncoder, Container};
use wave::container::WaveContainer;

/// Encodes audio to wave format to the provided writer.
pub struct Encoder<'w, W: 'w> {
  writer: &'w mut W,
}

impl<'w, W> Encoder<'w, W> where W: Write {
  /// Create a new wave format `Encoder` using the provided writer.
  #[inline]
  pub fn new(writer: &'w mut W) -> Encoder<'w, W> {
    Encoder {
      writer: writer
    }
  }
}

impl<'w, W> AudioEncoder for Encoder<'w, W> where W: Write {
  /// Creates and writes a `WaveContainer` to the included writer. The audio
  /// is encoded to standard 16-bit, uncompressed LPCM audio.
  #[inline]
  fn encode(&mut self, audio: &AudioBuffer) -> AudioResult<()> {
    WaveContainer::create(&mut self.writer, audio, LPCM_I16_LE)
  }
  /// Creates and writes a `WaveContainer` using the provided `SampleFormat`
  /// to the included writer. This is how audio can be encoded to different
  /// bit rates supported by the format.
  #[inline]
  fn encode_as(&mut self, audio: &AudioBuffer, codec: Codec) -> AudioResult<()> {
    WaveContainer::create(&mut self.writer, audio, codec)
  }
}
