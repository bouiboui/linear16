Converts an audio file to LINEAR16 Google-speech compatible file.

Installation
--
This library uses ffmpeg so you must install it first and set the FFMPEG_PATH variable in your path to a valid ffmpeg executable.
```bash
npm i --save linear16
```

Usage
--
```js
const linear16 = require('linear16');

linear16('./input.m4a', './output.wav')
   .then(outPath => console.log(outPath)); // Returns the output path, ex: ./output.wav

```

This project has only been tested with m4a but should be compatible with all supported audio formats supported by ffmpeg.
