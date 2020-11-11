'use strict';
/*const users = await Users.find({}).select('-password').lean().exec();
res.status(200).json({data: users});
}));

Users.authenticateBasic = async function(username, password) {
    const user = await Users.find({ 'username': username });
    if (user === null) {
        return res.status(400).send('Unable to find user')
    }
Use Blowfish for encryption here: 
*/

const SECRET = process.env.SECRET
let myString = SECRET;

//decrypt this string to be a bunch of numbers like I used for codestring:
// Create a new.Blowfish(secretstring) and then call decrypt() on the encrypted value
//The random numbs are an encrypted code string, pass them into decrypt() and you should *hopefully* see a numbers-only codestring 
