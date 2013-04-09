/**
 * Test HMAC functionality.
 */
var assert = require('assert');
var jsHashes = require('../');

var MD5 = new jsHashes.MD5;
MD5.setUTF8(false);

// test vectors from http://www.ietf.org/rfc/rfc2104.txt
describe('Test MD5 HMAC (rfc2104)', function() {
    it("should pass test vector #1", function() {
        var key = '\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b';
        assert.equal(MD5.hex_hmac(key, 'Hi There'),
                     "9294727a3638bb1c13f48ef8158bfc9d");
    });
    it("should pass test vector #2", function() {
        assert.equal(MD5.hex_hmac("Jefe", "what do ya want for nothing?"),
                     "750c783e6ab0b503eaa86e310a5db738");
    });
    it("should pass test vector #3", function() {
        var key = '', data = '', i;
        for (i=0; i<16; i++) {
            key += '\xAA';
        }
        for (i=0; i<50; i++) {
            data += '\xDD';
        }
        assert.equal(MD5.hex_hmac(key, data),
                     '56be34521d144c88dbb8c733f0e8b3f6');
    });
});

// test vectors from
// http://en.wikipedia.org/wiki/Hash-based_message_authentication_code
var testVectors = [
    {
        key: "",
        data: "",
        hmac: {
            MD5: "74e6f7298a9c2d168935f58c001bad88",
            SHA1: "fbdb1d1b18aa6c08324b7d64b71fb76370690e1d",
            SHA256: "b613679a0814d9ec772f95d778c35fc5ff1697c493715653c6c712144292c5ad"
        }
    },
    {
        key: "key",
        data: "The quick brown fox jumps over the lazy dog",
        hmac: {
            MD5: "80070713463e7749b90c2dc24911e275",
            SHA1: "de7c9b85b8b78aa6bc8a7a36f70a90701c9db4d9",
            SHA256: "f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8"
        }
    }
];
describe('Test HMAC (wikipedia test vectors)', function() {
    testVectors.forEach(function(tv) {
        var key = tv.key, data = tv.data;
        describe('key='+JSON.stringify(key)+" data="+JSON.stringify(data), function() {
            Object.keys(tv.hmac).forEach(function(h) {
                it('should have the correct HMAC_'+h, function() {
                    HF = new jsHashes[h]();
                    assert.equal(HF.hex_hmac(key, data), tv.hmac[h]);
                });
            });
        });
    });
});
