'use strict';
const sampleData = require('../sampledata.json')
const decrypt = require('./middleware/blowfish');
const asyncWrapper = require('./middleware/aync-wrapper.js')
// Route Handlers
exports.getHandler = asyncWrapper(async (req, res) => {
  const result = await req.model.readAll();
  console.log('in gethandler', result);
  res.status(200).json(result);
  console.log('getting result', result);
})
// Filter should now use decrypted instead req.params.id(decryped is the result);
// With the encrypt function inside GET, We no longer receive the parsable code in the reqeuest
// I ran decrypt on request to get parsable code
exports.getIdHandler = asyncWrapper(async (req, res) => {
  // the string that we get from request is almost entirely anencrypted code
  // The first the characters are the gameId and those can't be encrypted bec we need them to get secret
  const encrypted = req.params.id.slice(3);
  const machineId = req.params.id.slice(0, 3);
  //using decrypt method from blowfish.js to get decrypted data
  const decrypted = decrypt(encrypted, machineId);
  console.log('decrypted', decrypted);
  //TODO: call parse method to parse decrypted code to get gameID, revision
  let gameId = decrypted.slice(0, 2);
  const gameData = await req.model.read(gameId);
  const result = filterData(decrypted, gameData);
  res.json(result);
  //this returns the name of the game at the id
  // in Postman I have to pass in the id in the body
})
exports.postHandler = asyncWrapper(async (req, res) => {
  const result = await req.model.create(req.body);
  res.json(result);
})
exports.putIdHandler = asyncWrapper(async (req, res) => {
  const result = await req.model.update(req.params.id, req.body);
  //method that updates a document in db
  res.status(200).json(result);
})
exports.deleteIdHandler = asyncWrapper(async (req, res) => {
  const result = await req.model.delete(req.params.id);
  res.status(202).json(result);
})

//Parse and filter
const parseCode = (codeString) => {
  // any number of 3-digit groups for game data + 0 + score + 4-digit time 
  const re = /(([1-9].{2})+)+0(\d+?)(\d{4})$/
  const match = codeString.match(re);
  //console.log(match);
  if (match === null || match[1] === undefined) {
    return ["", "", ""];
  }
  return [match[1].match(/.{3}/g), match[3], match[4]]
}

function filterData(string, gameData) {
  let splitCodeString = string.slice(3);
  //70913950901480520415
  console.log('splitcodestring in filterdata', splitCodeString)
  let result = parseCode(splitCodeString);
  console.log('splitCodeString result', result)
  //[ [ '709', '139', '509' ], '148052', '0415' ]
  let modeObject = result[0].reduce((acc,curr) => {
    //key is 70 value is 9
    let key = curr.slice(0, 2)
    let value = curr.slice(2)
    acc[key] = value; 
    return acc; 
  }, {});
 gameData.modes = gameData.modes.filter(mode => {
     return mode.key in modeObject
 })
 return gameData;
}