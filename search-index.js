var searchIndex = {};
searchIndex['audio'] = {"items":[[0,"","audio","",null,null],[3,"AudioBuffer","","A container for audio samples and important attributes.",null,null],[12,"sample_rate","","Number of samples per second",0,null],[12,"channels","","Number of channels",0,null],[12,"samples","","Decoded audio samples",0,null],[4,"AudioFormat","","All supported audio formats.",null,null],[13,"WAVE","","Waveform Audio File Format",1,null],[13,"AIFF","","Audio Interchange File Format",1,null],[4,"Codec","","All supported audio codecs.",null,null],[13,"LPCM_U8","","Unsigned 8-bit linear PCM",2,null],[13,"LPCM_I8","","Signed 8-bit linear PCM",2,null],[13,"LPCM_I16_LE","","Signed 16-bit linear PCM in little endian format",2,null],[13,"LPCM_I16_BE","","Signed 16-bit linear PCM in big endian format",2,null],[13,"LPCM_I24_LE","","Signed 24-bit linear PCM in little endian format",2,null],[13,"LPCM_I24_BE","","Signed 24-bit linear PCM in big endian format",2,null],[13,"LPCM_I32_LE","","Signed 32-bit linear PCM in little endian format",2,null],[13,"LPCM_I32_BE","","Signed 32-bit linear PCM in big endian format",2,null],[13,"LPCM_F32_LE","","32-bit floating-point linear PCM in little endian format",2,null],[13,"LPCM_F32_BE","","32-bit floating-point linear PCM in big endian format",2,null],[13,"LPCM_F64_LE","","64-bit floating-point linear PCM in little endian format",2,null],[13,"LPCM_F64_BE","","64-bit floating-point linear PCM in big endian format",2,null],[13,"G711_ALAW","","G.711 8-bit A-law",2,null],[13,"G711_ULAW","","G.711 8-bit µ-law",2,null],[4,"AudioError","","An enumeration for reporting audio errors",null,null],[13,"Format","","An audio file does not match the supported format specification",3,null],[13,"Io","","Any underlying IO error occurred during an audio process",3,null],[13,"Unsupported","","An audio process requires use of an unsupported feature",3,null],[13,"AudioEnd","","The end of the audio file was reached",3,null],[4,"SampleOrder","","The channel ordering of audio `Sample`s.",null,null],[13,"Mono","","Only one channel, no ordering",4,null],[13,"Interleaved","","[L, C, R, L, C, R]",4,null],[13,"Reversed","","[R, C, L, R, C, L]",4,null],[13,"Planar","","[L, L, C, C, R, R]",4,null],[5,"open","","Opens and loads the audio file into memory from a `Path`.",null,{"inputs":[{"name":"path"}],"output":{"name":"audioresult"}}],[5,"load","","Loads the audio from a reader into memory.",null,{"inputs":[{"name":"r"},{"name":"audioformat"}],"output":{"name":"audioresult"}}],[5,"save","","Saves an `AudioBuffer` to a `Path`.",null,{"inputs":[{"name":"path"},{"name":"audiobuffer"}],"output":{"name":"audioresult"}}],[5,"save_as","","Saves an `AudioBuffer` to a `Path` using a specified `Codec`.",null,{"inputs":[{"name":"path"},{"name":"audiobuffer"},{"name":"codec"}],"output":{"name":"audioresult"}}],[5,"write","","Buffers and writes an `AudioBuffer` to a writer using a specified\n`AudioFormat`.",null,{"inputs":[{"name":"w"},{"name":"audiobuffer"},{"name":"audioformat"}],"output":{"name":"audioresult"}}],[5,"write_as","","Buffers and writes an `AudioBuffer` to a writer using a specified\n`AudioFormat` and `Codec`.",null,{"inputs":[{"name":"w"},{"name":"audiobuffer"},{"name":"audioformat"},{"name":"codec"}],"output":{"name":"audioresult"}}],[11,"eq","","",1,{"inputs":[{"name":"audioformat"},{"name":"audioformat"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"audioformat"},{"name":"audioformat"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"audioformat"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"audioformat"}],"output":{"name":"audioformat"}}],[11,"fmt","","",0,{"inputs":[{"name":"audiobuffer"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"audiobuffer"}],"output":{"name":"audiobuffer"}}],[11,"new","","Creates a new, empty `AudioBuffer`.",0,{"inputs":[{"name":"audiobuffer"},{"name":"u32"},{"name":"u32"}],"output":{"name":"self"}}],[11,"from_samples","","Creates a new `AudioBuffer` using the given `Sample`s.",0,{"inputs":[{"name":"audiobuffer"},{"name":"u32"},{"name":"u32"},{"name":"vec"}],"output":{"name":"self"}}],[11,"from_bytes","","Creates an `AudioBuffer` from a set of bytes using a `Codec`.",0,null],[11,"duration","","The duration of the audio in milliseconds.",0,{"inputs":[{"name":"audiobuffer"}],"output":{"name":"usize"}}],[11,"eq","","",2,{"inputs":[{"name":"codec"},{"name":"codec"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"codec"},{"name":"codec"}],"output":{"name":"bool"}}],[11,"fmt","","",2,{"inputs":[{"name":"codec"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"codec"}],"output":{"name":"codec"}}],[11,"bit_depth","","Returns the bit depth of the decoded audio from a codec.",2,{"inputs":[{"name":"codec"}],"output":{"name":"usize"}}],[11,"fmt","","",2,{"inputs":[{"name":"codec"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"audioerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"audioerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",3,{"inputs":[{"name":"audioerror"}],"output":{"name":"str"}}],[11,"cause","","",3,{"inputs":[{"name":"audioerror"}],"output":{"name":"option"}}],[11,"from","","",3,{"inputs":[{"name":"audioerror"},{"name":"ioerror"}],"output":{"name":"audioerror"}}],[11,"from","","",3,{"inputs":[{"name":"audioerror"},{"name":"byteerror"}],"output":{"name":"audioerror"}}],[11,"eq","","",4,{"inputs":[{"name":"sampleorder"},{"name":"sampleorder"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"sampleorder"},{"name":"sampleorder"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"sampleorder"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"sampleorder"}],"output":{"name":"sampleorder"}}],[6,"AudioResult","","Result type of an audio encoding or decoding process",null,null],[6,"Sample","","Audio sample.",null,null],[8,"FromSample","","Converts a `Sample` to another type.",null,null],[10,"from_sample","","",5,{"inputs":[{"name":"fromsample"},{"name":"sample"}],"output":{"name":"self"}}],[8,"ToSample","","Converts a type to a `Sample`.",null,null],[10,"to_sample","","",6,{"inputs":[{"name":"tosample"}],"output":{"name":"sample"}}]],"paths":[[3,"AudioBuffer"],[4,"AudioFormat"],[4,"Codec"],[4,"AudioError"],[4,"SampleOrder"],[8,"FromSample"],[8,"ToSample"]]};
searchIndex['byteorder'] = {"items":[[0,"","byteorder","This crate provides convenience methods for encoding and decoding numbers\nin either big-endian or little-endian order.",null,null],[4,"Error","","An error type for reading bytes.",null,null],[13,"UnexpectedEOF","","An unexpected EOF.",0,null],[13,"Io","","Any underlying IO error that occurs while reading bytes.",0,null],[4,"BigEndian","","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",0,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"from","std::io::error","",1,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"fmt","byteorder","",0,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[6,"Result","","A short-hand for `result::Result<T, byteorder::Error>`.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f64"}],"output":{"name":"result"}}],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",4,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",4,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",4,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",4,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",4,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",4,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",4,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",4,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",4,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",4,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",4,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",4,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",4,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",4,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",4,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",4,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",4,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",4,null],[11,"read_u16","","",5,null],[11,"read_u32","","",5,null],[11,"read_u64","","",5,null],[11,"read_uint","","",5,null],[11,"write_u16","","",5,null],[11,"write_u32","","",5,null],[11,"write_u64","","",5,null],[11,"read_u16","","",6,null],[11,"read_u32","","",6,null],[11,"read_u64","","",6,null],[11,"read_uint","","",6,null],[11,"write_u16","","",6,null],[11,"write_u32","","",6,null],[11,"write_u64","","",6,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",2,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",2,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",3,{"inputs":[{"name":"writebytesext"},{"name":"f64"}],"output":{"name":"result"}}]],"paths":[[4,"Error"],[3,"Error"],[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
initSearch(searchIndex);
