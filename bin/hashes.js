#!/usr/bin/env node
/**
 * Simple CLI to simplify common tasks :)
 * @beta
 */
var Hashes = require('../hashes'),
    args = process.argv,
    version = '1.0.3',
    usage, options;

// Usage dialog
usage = [
    'jsHashes ' + version
  , ''
  , 'Usage:'
  , '  hashes [option] [string]'
  , ''
  , 'Options:'
  , '  md5-hex'
  , '  md5-b64'
  , '  sha1-hex'
  , '  sha1-hex'
  , '  sha256-hex'
  , '  sha256-b64'
  , '  sha512-hex'
  , '  sha512-b64'
  , '  rmd160-hex'
  , '  rmd160-b64'
  , '  b64-enc'
  , '  b64-dec'
  , '  crc32'
  , ''
  , 'Help:'
  , '  -h , --help, help'
  , ''
  , 'Current version:'
  , '  -v , --version, version'
  , ''
  , 'Examples:'
  , '  $ hashes sha1-hex "sample text!"'
  , '  $ node hashes sha1-hex "sample text!"'
  , ''
].join('\n');

options = [
   'md5-hex'
  ,'md5-b64'
  ,'sha1-hex'
  ,'sha1-hex'
  ,'sha256-hex'
  ,'sha256-b64'
  ,'sha512-hex'
  ,'sha512-b64'
  ,'rmd160-hex'
  ,'rmd160-b64'
  ,'b64-enc'
  ,'b64-dec'
  ,'crc32'
];

// Exit the process with a message
function die (str) {
  console.log(str);
  process.exit();
}

// process algorithm
function procesAlgorithm() {
    var algorithm = args[0].split('-')[0].toUpperCase(),
        encoding = args[0].split('-')[1],
        string = args.slice(1).join(''),
        instance, output;
    
    if (algorithm === 'B64') {
      algorithm = 'Base64';
      encoding = encoding === 'dec' ? 'decode' : 'encode';
    }

    if (Hashes.hasOwnProperty(algorithm)) {
      if (algorithm === 'CRC32') {
        output = Hashes[algorithm](string);
      } else {
        instance = new Hashes[algorithm];
        if (instance.hasOwnProperty(encoding)) {
          output = instance[encoding](string);
        }
      }
    } else {
      output = 'Algorithm not supported. Type help to see the list of available options.'
    }
    return output;
}

if (args[0] && args[0].indexOf('node') !== -1) {
    args = args.slice(2);
}
if (args[0] === '-v' || args[0] === '--version' || args[0] === 'version') {
  die(version);
}
if (args[0] === '-h' || args[0] === '--help' || args[0] === 'help' || args.length < 2 || options.indexOf(args[0]) === -1) {
  die(usage);
}

die(procesAlgorithm());