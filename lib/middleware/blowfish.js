'use strict';
const crypto = require('crypto');

//Method to parse encrypted string:

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

//Sample string to run as input:
// call the function with the string
const decryptedString = decrypt('6fcn/4eh0Diwr+foB/nhJdU4i33OI/bX');
console.log(decryptedString);
//Should return the following codestring as output:
    //70913950901480520415