'use strict';

const ffmpeg = require('fluent-ffmpeg');
const ffmpeg_static = require('ffmpeg-static');
const mime = require('mime');
const fs = require('fs');

async function linear16(filePathIn, filePathOut) {

    if (('object' === typeof filePathIn) && !filePathOut) {
        const {inPath, outPath} = filePathIn;
        filePathIn = inPath;
        filePathOut = outPath;
    }

    if (!filePathIn || !filePathOut) {
        throw new Error('You must specify a path for both input and output files.');
    }
    if (!fs.existsSync(filePathIn)) {
        throw new Error('Input file must exist.');
    }
    if (mime.getType(filePathIn).indexOf('audio') <= -1) {
        throw new Error('File must have audio mime.');
    }

    return new Promise((resolve, reject) => {
        try {
            ffmpeg()
                .setFfmpegPath(ffmpeg_static.path)
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
    });

}

module.exports = linear16;