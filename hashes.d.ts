declare module 'jshashes' {
  class HashesClass {
    /**
     * Hexadecimal hash encoding from string.
     */
    hex(input: string): string;

    /**
     * Base64 hash encoding from string.
     */
    b64(input: string): string;

    /**
     * Custom hash algorithm values encoding.
     */
    any(input: string, encoding: string): string;

    /**
     * Hexadecimal hash with HMAC salt key.
     */
    hex_hmac(key: string, input: string): string;

    /**
     * Custom hash values encoding with HMAC salt key support.
     */
    b64_hmac(key: string, input: string): string;

    /**
     * Custom hash values encoding with HMAC salt key support.
     */
    any_hmac(key: string, input: string, encoding: string): string;

    /**
     * Simple self-test to see if working.
     */
    vm_test(): this;

    /**
     * Enable/disable uppercase hexadecimal returned string.
     */
    setUpperCase(isEnabled: boolean): this;

    /**
     * Defines a custom base64 pad string. Default is '=' according with the RFC standard.
     */
    setPad(pad: string): this;

    /**
     * Enable/disable UTF-8 character encoding.
     */
    setUTF8(isEnabled: boolean): this;
  }

  namespace Hashes {
    export class MD5 extends HashesClass { }
    export class SHA1 extends HashesClass { }
    export class SHA256 extends HashesClass { }
    export class SHA512 extends HashesClass { }
    export class RMD160 extends HashesClass { }
  }

  export = Hashes;
}
