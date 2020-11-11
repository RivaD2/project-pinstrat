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
  // console.log(match);
  if (match === null || match[1] === undefined) {
    return ["", "", ""];
  }
  return [match[1], match[3], match[4]]
}

function filterData(string, gameData) {
  let splitCodeString = string.slice(3);
  let result = parseCode(splitCodeString);
  let slicedResult = result.slice(0, 1);
  console.log(slicedResult[0]);
  let gameId1 = slicedResult[0].slice(0, 2);
  let gameId2 = slicedResult[0].slice(3, 5);
  let gameId3 = slicedResult[0].slice(6, 8);
  //console.log(gameId1, gameRevision1, gameId2, gameRevision2, gameId3, gameRevision3)
  let gameRevision1 = slicedResult[0].slice(2, 3);
  let gameRevision2 = slicedResult[0].slice(5, 6);
  let gameRevision3 = slicedResult[0].slice(8, 9);
  //console.log(gameRevision1, gameRevision2, gameRevision3)
  console.log(gameId1, gameRevision1, gameId2, gameRevision2, gameId3, gameRevision3)


  // let gameId1 = splitCodeString.slice(0, 2);
  // //console.log(gameId1);
  // let gameRevision = splitCodeString.slice(2, 3).toString();
  // console.log(gameRevision);

  //here is where we need to go into the database
  //i am using the sample JSON file for now
  // for (let i = 0; i <= sampleData.modes.length; i++) {
  //   if (sampleData.modes[i].key === gameId) {
  //     let selectedKey = sampleData.modes[i];
  //     selectedKey.playerstatus = selectedKey.statuses[gameRevision];
  //     delete selectedKey.statuses;
  //     return selectedKey;
  //   }
  // }
}

let codestring = '12070913950901480520415';
filterData(codestring)
//console.log(filterData(codestring));

//result[0].match(/.{1}.{2}/g)