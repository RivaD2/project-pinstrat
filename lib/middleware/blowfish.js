'use strict';
const crypto = require('crypto');

//Method to parse encrypted string:
/*Function was developed in coordination 
with the client to ensure that the decoding and encoding use the same algorithms
*/
function decrypt(string, machineId) {
    const secretKey = 'MACHINE_ID_' + machineId;
    const secret = process.env[secretKey];
    //getting base64 encoded string and converting to bytes
    var buf = Buffer.from(string, 'base64')
    //converting secret to byte string
    const keyBytes = Buffer.from(secret, 'utf8')
    //running ecb decryption using the secret
    const decipher = crypto.createDecipheriv('bf-ecb', keyBytes, Buffer.alloc(0));
    //creating a buffer to store deciphered blocks
    const buffers = [];
    //pushing blocks (ecb encodes things in blocks)
    buffers.push(decipher.update(buf));
    // when we are finished, we close out the last block with final();
    buffers.push(decipher.final());
    // concatenating all of the decypted blocks into single string
    const newBytes = Buffer.concat(buffers).join("");
    return newBytes;
}

module.exports = decrypt;