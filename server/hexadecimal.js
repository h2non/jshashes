#!/usr/bin/env node

var Hash = require('./lib/hashlib').Hash;
  
// sample string
var str = 'This is a sample text!';

console.log('jsHashes hexadecimal sample...\n');

console.log('MD5 HEX -> ' + new Hash.MD5().hex(str));
console.log('SHA1 HEX -> ' + new Hash.SHA1().hex(str));
console.log('SHA256 HEX -> ' + new Hash.SHA256().hex(str));
console.log('SHA512 HEX -> ' + new Hash.SHA512().hex(str));
console.log('RIPEMD160 HEX -> ' + new Hash.RMD160().hex(str));
