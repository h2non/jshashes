#!/usr/bin/env node

var Hashes = require('./lib/hashes');
  
// sample string
var str = 'This is a sample text!';
// sample url
var url = 'http://google.com?web&test=11+23+21&search=my name is john';

// new Base64 instance
var b64 = new Hashes.Base64;

console.log('jsHashes\nBase64, CRC-32 and URL enconding example...\n');

console.log('Base64 encode -> ' + b64.encode(str));
console.log('Base64 decode -> ' + b64.decode(b64.encode(str)));
console.log('CRC32 calculation -> ' + Hashes.CRC32(str));
console.log ('URL encode -> ' + Hashes.Helpers.urlEncode(url));
console.log('URL decode -> ' + Hashes.Helpers.urlDecode(Hashes.Helpers.urlEncode(url)));
