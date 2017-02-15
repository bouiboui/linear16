'use strict';

const assert = require('assert');
const linear16 = require('../index');
const describe = require('mocha').describe;
const it = require('mocha').it;
const fs = require('fs');

describe('linear16', () => {
    it('should fail if parameters are missing', () => {
        linear16().then(() => {
            throw new Error('should have rejected input');
        }).catch(err => {
        });
        linear16('./test').then(() => {
            throw new Error('should have rejected input');
        }).catch(err => {
        });
        linear16(null, './test').then(() => {
            throw new Error('should have rejected input');
        }).catch(err => {
        });
    });
    it('should fail for non-existing input file', () => {
        linear16('./thisfiledoesnotexist', './out')
            .then(() => {
                throw new Error('Should have thrown an error');
            })
            .catch(() => {
            });
    });
    it('should work normally', () =>
        linear16(
            './test/test.m4a',
            './test/test.wav'
        ).then(outFile => {
            assert.deepEqual(true, fs.existsSync(outFile));
            fs.unlinkSync(outFile)
        }))
});
