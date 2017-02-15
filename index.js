'use strict';

const ffmpeg = require('fluent-ffmpeg');
const mime = require('mime');

module.exports = (filePathIn, filePathOut) => new Promise((resolve, reject) => {
    if (mime.lookup(filePathIn).indexOf('audio') > -1) {
        try {
            ffmpeg()
                .input(filePathIn)
                .outputOptions([
                    '-f s16le',
                    '-acodec pcm_s16le',
                    '-vn',
                    '-ac 1',
                    '-ar 16k',
                    '-map_metadata -1'
                ])
                .save(filePathOut)
                .on('end', () => resolve(filePathOut));

        } catch (e) {
            reject(e);
        }
    } else {
        throw new Error('File must have audio mime.');
    }
});
