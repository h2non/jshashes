# jsHashes

## About

`jsHashes` is a pure JavaScript implementation of the most extended hash algorithms.
It's goal is to provide an independent, fast and easy solution for hash algorithms both for client-side and server-side JavaScript environments.
The code is full compatible with the ECMAScript language specification and was tested in all major browsers (client-side) and node.js all versions (server-side).   

## Supported hash algorithms

* MD5 <http://www.ietf.org/rfc/rfc1321.txt>
* SHA1 <http://homes.esat.kuleuven.be/~bosselae/ripemd160.html>
* SHA256 <http://csrc.nist.gov/publications/fips/fips180-2/fips180-2.pdf>
* SHA512 <http://csrc.nist.gov/publications/fips/fips180-2/fips180-2.pdf>
* HMAC <http://www.ietf.org/rfc/rfc2104.txt>
* RIPEMD-160 <http://homes.esat.kuleuven.be/~bosselae/ripemd160.html>

## Usage
jsHashes implement a simple object-oriented for easy and clean way to usage. 
Each algorithm had its respective 'class', providing encapsulation (public and private methods) and independence from others.   

All the 'classes' are defined inside the Object 'Hash' (like namespace implementation). 

Here an example of how to create a new instance for each algorithm:
```javascript
// new MD5 instance
var MD5 = new Hash.MD5;
// new SHA1 instance
var SHA1 = new Hash.SHA1;
// new SHA256 instance
var SHA256 =  new Hash.SHA256;
// new SHA512 instace
var SHA512 = new Hash.SHA512;
// new RIPEMD-160 instace
var RMD160 = new Hash.RMD160; 
```

Now, an example of how to output an hexadecimal-based hash encoding for each algorithm (client-side):
```javascript
// sample string
var str = 'Sample text!';
// output into DOM
document.write('MD5: ' + MD5.hex(str) + '');
```

### Client-Side
Easy way to usage for client-side environment:
```javascript
<html>
<head>
<script type="application/javascript" src="src/hashes.js"></script>
<script type="application/javascript">
// sample string 
var str = 'This is a sample text!';
// new MD5 instance and hexadecimal string encoding
var MD5 = new Hash.MD5().hex(str);
// output into DOM
document.write('<p>MD5: <b>' + MD5 + '</b></p>');
</script>
</head>
<body>
</body>
</html>
```

### Server-Side (Node.js)
The server-side by default was implemented for node.js (V8 chrome engine).

jsHashes is available via NPM. You can it simply doing:
```
$ npm install jshashes
```

You can use it like module. Here a simple example:
```javascript
#!/usr/bin/env node
// require the module and use Hash object
var Hash = require('./lib/hashes').Hash;
// sample string
var str = 'This is a sample text!';
// new SHA1 instance and base64 string encoding
var SHA1 = new Hash.SHA1().b64(str);
// output to console
console.log('SHA1: ' + SHA1);
```

## Public methods
All the hash algorithms include the following public methods:

* hex(string) - Hexadecimal hash calculation from string 
* b64(string) - Base64 hash calculation from string
* any(string,encoding) - Custom hash algorithm values encoding
* hex_hmac(string,key) - Hexadecimal hash with HMAC salt key
* b64_hmac(string,key) - Base64 hash with HMAC salt key 
* any_hmac(string,key,encoding) - Custom hash values encoding with HMAC salt key support
* vm_test() - Simple self-test to see is working

## Hash encoding formats supported

* Hexadecimal (most extended)
* Base64
* Custom hash values encoding

All include HMAC support.

## Benchmark
TODO...

## Notes

* Don't support checksum hash for files on the server-side, only text-based inputs are supported.
* Not has been planned to add support for more hash algorithms.
* The goal is to provide the same JavaScript code in both server and client side, so at the moment is not pretended to improve it in other ways. 
* Only Node.js server-side was tested, so with minimal changes, you can setup jsHashes in other server-side JS environment.

## Version

* 1.1b - Minimal library improves. Added some samples, how to usage and first NPM package.
* 1.0b - First release: the code is stable, but the library still beta and must be improved and documented.

## Authors 

### Library author

* Tomas Aparicio <https://github.com/h2non/>

### Original code author and algorithms implementation

* Paul Johnston <http://pajhome.org.uk/crypt/md5/>
* Angel Marin
* Jeremy Lin

### Other contributors

* Greg Holt
* Andrew Kepert
* Ydnar
* Lostinet

## License

jsHashes is released under New BSD license <http://www.opensource.org/licenses/BSD-3-Clause>.
See LICENSE.txt

## Issues

Feel free to report any issue you experiment via Github <https://github.com/h2non/jsHashes/issues>.
