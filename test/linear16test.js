'use strict';

const assert = require('assert');
const linear16 = require('../index');
const describe = require('mocha').describe;
const it = require('mocha').it;
const fs = require('fs');

describe('linear16', () => {
    it('should fail if parameters are missing', async () => {
        return assert.rejects(linear16.bind(null), Error);
    });
    it('should fail if input file parameter is missing', async () => {
        return assert.rejects(linear16.bind(null, './test'), Error);
    });
    it('should fail if output file parameter is missing', async () => {
        return assert.rejects(linear16.bind(null, null, './test'), Error);
    });
    it('should fail for non-existing input file', async () => {
        return assert.rejects(linear16.bind(null, './thisfiledoesnotexist', './out'), Error);
    });
    it('should work normally', async () => {
        const outFile = await linear16('./test/test.m4a', './test/test.wav');
        assert.deepEqual(true, fs.existsSync(outFile));
        fs.unlinkSync(outFile);
    });
    it('should accept object-like parameters', async () => {
        const outFile = await linear16({inPath: './test/test.m4a', outPath: './test/test.wav'});
        assert.deepEqual(true, fs.existsSync(outFile));
        fs.unlinkSync(outFile);
    });
});
