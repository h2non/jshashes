# jsHashes `A hash algorithm independent library purely JavaScript implemented for both server and client side`

## About

`jsHashes` is a pure JavaScript implementation of the most extended hash algorithms.
Its goal is to provide an independent, fast and easy solution for hash algorithms both for client-side and server-side JavaScript environments.
The code is fully compatible with the ECMAScript language specification and was tested in all major browsers (client-side) and node.js all versions (server-side).   

## Supported hash algorithms

* MD5 <http://www.ietf.org/rfc/rfc1321.txt>
* SHA1 <http://homes.esat.kuleuven.be/~bosselae/ripemd160.html>
* SHA256 <http://csrc.nist.gov/publications/fips/fips180-2/fips180-2.pdf>
* SHA512 <http://csrc.nist.gov/publications/fips/fips180-2/fips180-2.pdf>
* HMAC <http://www.ietf.org/rfc/rfc2104.txt>
* RIPEMD-160 <http://homes.esat.kuleuven.be/~bosselae/ripemd160.html>

## Usage
`jsHashes` implements an object-oriented paradigm for an easy and clean use. 
Each algorithm has its respective own `class`, providing encapsulation (public and private methods) and independence from other classes.   

All the `classes` are defined inside the Object called `Hash` (like namespace). 

Here you can see an example of how to create a new instance for each algorithm:

```javascript
// new MD5 instance
var MD5 = new Hashes.MD5;
// new SHA1 instance
var SHA1 = new Hashes.SHA1;
// new SHA256 instance
var SHA256 =  new Hashes.SHA256;
// new SHA512 instace
var SHA512 = new Hashes.SHA512;
// new RIPEMD-160 instace
var RMD160 = new Hashes.RMD160; 
```

Now, an example of how to output an hexadecimal-based hash encoding for each algorithm (client-side):

```javascript
// sample string
var str = 'Sample text!';
// output into DOM
document.write('<p>MD5: <b>' + MD5.hex(str) + '</b></p>');
document.write('<p>SHA1: <b>' + SHA1.hex(str) + '</b></p>');
document.write('<p>SHA256: <b>' + SHA256.hex(str) + '</b></p>');
document.write('<p>SHA512: <b>' + SHA512.hex(str) + '</b></p>');
document.write('<p>RIPEMD-160: <b>' + RMD160.hex(str) + '</b></p>');
```

### Client-Side
This is a simple implementation for client-side environment:

```html
<html>
<head>
<script type="application/javascript" src="src/hashes.js"></script>
<script type="application/javascript">
// sample string 
var str = 'This is a sample text!';
// new MD5 instance and hexadecimal string encoding
var MD5 = new Hashes.MD5().hex(str);
// output into DOM
document.write('<p>MD5: <b>' + MD5 + '</b></p>');
</script>
</head>
<body>
</body>
</html>
```

### Server-Side
The server-side was implemented by default for node.js (V8 chrome engine) <http://nodejs.org>.

`jsHashes` is available via NPM. You can install it simply doing:

```
$ npm install jshashes
```

You can use it like module. Here a simple example:

```javascript
#!/usr/bin/env node
// require the module and use Hash object
var Hash = require('./lib/hashes').Hashes;
// sample string
var str = 'This is a sample text!';
// new SHA1 instance and base64 string encoding
var SHA1 = new Hashes.SHA1().b64(str);
// output to console
console.log('SHA1: ' + SHA1);
```

## Public methods
Each algorithm `class` provides the following public methods:

* hex(string) - Hexadecimal hash encoding from string 
* b64(string) - Base64 hash encondig from string
* any(string,encoding) - Custom hash algorithm values encoding
* hex_hmac(string,key) - Hexadecimal hash with HMAC salt key
* b64_hmac(string,key) - Base64 hash with HMAC salt key 
* any_hmac(string,key,encoding) - Custom hash values encoding with HMAC salt key support
* vm_test() - Simple self-test to see is working

## Hash encoding formats supported

* Hexadecimal (most extended)
* Base64
* Custom hash values encoding

All include HMAC support. UTF-16 also supported.

## Benchmark
TODO...

## Notes

* Don't support checksum hash for files on the server-side, only text-based inputs are supported.
* It has not been planned to include support for more hash algorithms.
* The goal is to provide the same JavaScript code in both server and client side, so it isn't planned to improve it in other ways. 
* Only Node.js server-side was tested, so with minimal changes, you can setup `jsHashes` in other server-side JS environment.

## Changelog

### Beta
* `0.1.2b` 
  - SHA1 fixed error. General code changes (renaming classes, private methods, new methods...). 
  - Changing library namespace to 'Hashes'. 
  - Starting code documentation. 
  - Added new examples of how to use. 
* `0.1.1b` 
  - Minimal library improvements. 
  - There has been added some samples, like how to use it and support for NPM package.
* `0.1.0b` 
  - First release: the code is stable, but the library is still beta and must be improved and documented.

## TODO list

* Add support for CRC32
* Implement new hash algorithms for experimental proposals (tiger, ripemd320, gost, adler32, haval...)
* Improve and standarize code documentation
* Benchmarking 

## Authors 

### Library author

* Tomas Aparicio (<https://github.com/h2non/>)

### Original code author and algorithms implementation

* Paul Johnston (<http://pajhome.org.uk/crypt/md5/>)
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

