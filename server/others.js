#!/usr/bin/env node

var Hashes = require('./lib/hashes');
  
// sample string
var str = 'This is a sample text!';

// new Base64 instance
var b64 = new Hashes.Base64;

console.log('jsHashes\nBase64 encoding hash example...\n');

console.log('Base64 encode -> ' + b64.encode(str));
console.log('Base64 decode -> ' + b64.decode(b64.encode(str)));
console.log('CRC32 calculation -> ' + Hashes.CRC32(str));

console.log ('Encode URL -> ' + Hashes.Helpers.urlEncode('http://google.com?web&test=11+23+21&search=me llamo pepe'));
console.log('Encode URL -> ' + Hashes.Helpers.urlDecode( Hashes.Helpers.urlEncode('http://google.com?web&test=11+23+21&search=me llamo pepe')));
