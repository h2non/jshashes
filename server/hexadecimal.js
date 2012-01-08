#!/opt/opew/stack/node/bin/node

var Hash = require('./lib/hashlib').Hash;
   
var str = 'Sample text ajajajaja';

console.log('Hashes JavaScript testing...\n');
console.log('Typeof -> ' + typeof Hash.MD5);

console.log('MD5 HEX -> ' + new Hash.MD5().hex(str));
console.log('SHA1 HEX -> ' + new Hash.SHA1().hex(str));
console.log('SHA256 HEX -> ' + new Hash.SHA256().hex(str));
console.log('SHA512 HEX -> ' + new Hash.SHA512().hex(str));
console.log('RIPEMD160 HEX -> ' + new Hash.RMD160().hex(str));
