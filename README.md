**Converts an audio file to LINEAR16 Google-speech compatible file.**

This project has only been tested with m4a but should be compatible with all supported audio formats supported by ffmpeg.

Installation
--
```node
// with yarn
yarn add linear16

// with npm
npm i --save linear16
```

Usage
--

**With *async/await***
```js
const linear16 = require('linear16');

(async () => {

const outPath = await linear16('./input.m4a', './output.wav');
console.log(outPath); // Returns the output path, ex: ./output.wav

})();

```


**With named parameters**
```js
const linear16 = require('linear16');

(async () => {

const outPath = await linear16({
inPath:  './input.m4a',
outPath: './output.wav'
});
console.log(outPath); // Returns the output path, ex: ./output.wav

})();

```

**With *then***
```js
const linear16 = require('linear16');

linear16('./input.m4a', './output.wav')
.then(outPath => console.log(outPath)); // Returns the output path, ex: ./output.wav

```

