# audio [![Build Status](https://travis-ci.org/brianuosseph/audio.svg?branch=master)](https://travis-ci.org/brianuosseph/audio)
A Rust audio coding library

## TODO
- Add support for alternative WAVE sample formats
- Add support for AIFC (adds compression capability)
- Add `open_as` and `load_as` for reading data as a different audio format.
- Explore other audio formats (don't hold your breath on this one)

## Decoding

| Format | Codec | Bit Rates |
| ------ | ----- | --------- |
| WAVE | PCM | u8, i16, i24, i32 |
| AIFF | PCM | i8, i16, i24, i32 |

## Encoding

| Format | Codec | Bit Rates |
| ------ | ----- | --------- |
| WAVE | PCM | u8, i16, i24, i32 |
| AIFF | PCM | i8, i16, i24, i32 |
