#!/usr/bin/env node

var Hash = require('./lib/hashes').Hash;
  
// sample string
var str = 'This is a sample text!';

// new MD5 instance
var MD5 = new Hash.MD5;
// new SHA1 instance
var SHA1 = new Hash.SHA1;
// new SHA256 instance
var SHA256 =  new Hash.SHA256;
// new SHA512 instace
var SHA512 = new Hash.SHA512;
// new RIPEMD160 instace
var RMD160 = new Hash.RMD160;

console.log('jsHashes\nHexadecimal coding hashes example...\n');

console.log('MD5 -> ' + MD5.hex(str));
console.log('SHA1 -> ' + SHA1.hex(str));
console.log('SHA256 -> ' + SHA256.hex(str));
console.log('SHA512 -> ' + SHA512.hex(str));
console.log('RIPEMD160 -> ' + RMD160.hex(str));
