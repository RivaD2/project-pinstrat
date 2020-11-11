'use strict';


const sampleData = require('../sampledata.json')
const decrypt = require('./middleware/blowfish');
//const asyncWrapper = require('./middleware/aync-wrapper.js')
// Route Handlers

exports.getHandler =  async (req, res) => {
  const result = await req.model.readAll();
  console.log('in gethandler', result);
  res.status(200).json(result);
  console.log('getting result', result);
}

exports.postHandler =  async (req, res) => {
  const result = await req.model.create(req.body);
  res.json(result);
}

// By ID handlers
// Filter should now use decrypted instead req.params.id(decryped is the result);
// With the encrypt function inside GET, We no longer receive the parsable code in the reqeuest
// I ran decrypt on request to get parsable code

exports.getIdHandler =  async (req, res) => {
  // the string that we get from request is almost entirely anencrypted code
  // The first the characters are the gameId and those can't be encrypted bec we need them to get secret
  const encrypted = req.params.id.slice(3);
  const machineId = req.params.id.slice(0, 3);
  //using decrypt method from blowfish.js to get decrypted data
  const decrypted = decrypt(encrypted, machineId);
  console.log('decrypted', decrypted);
  //TODO: call parse method to parse decrypted code to get gameID, revision
  //the gameId is hardcoded for now(and gameID passed into read());
  //use the result of the read() to filter the real data not stub data
  // It might make sense to have method on model where we pass in parsed object or filter itself
  // Then the model could fetch the data and transform
  let gameId = '12'
  const result = await req.model.read(gameId);
  res.json(result);
  //this returns the name of the game at the id
  // in Postman I have to pass in the id in the body
}

exports.putIdHandler = async (req, res) => {
  const result = await req.model.update(req.params.id, req.body);
  //method that updates a document in db
  res.status(200).json(result);
}

exports.deleteIdHandler = async (req, res) => {
  const result = await req.model.delete(req.params.id);
  res.status(202).json(result);
}

//Parse and filter

const parseCode = (codeString) => {
  // any number of 3-digit groups for game data + 0 + score + 4-digit time 
  const re = /(([1-9].{2})+)+0(\d+?)(\d{4})$/
  const match = codeString.match(re);
  console.log(match);
  if (match === null || match[1] === undefined) {
    return ["", "", ""];
  }
  return [match[1], match[3], match[4]]
}

function filterData(string) {
  let splitCodeString = string.slice(3, 24);
  let playerKey = splitCodeString.slice(0, 2)
  //console.log(playerKey);
  let playerStatus = splitCodeString.slice(2, 3).toString()
  // console.log(playerStatus);
  parseCode(splitCodeString)

  //here is where we need to go into the database
  //i am using the sample JSON file for now
  for (let i = 0; i <= sampleData.modes.length; i++) {
    if (sampleData.modes[i].key === playerKey) {
      let selectedKey = sampleData.modes[i];
      selectedKey.playerstatus = selectedKey.statuses[playerStatus]
      delete selectedKey.statuses
      return selectedKey
    }
  }
}

let codestring = '12070913950901480520415';
console.log(filterData(codestring));
