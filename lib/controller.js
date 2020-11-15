'use strict';

const sampleData = require('../sampledata.json')
const decrypt = require('./middleware/blowfish');
const asyncWrapper = require('./middleware/aync-wrapper.js')
const logger = require('./middleware/presentation-logger.js')

// Route Handlers
exports.getHandler = asyncWrapper(async(req, res) => {
  const result = await req.model.readAll();
  console.log('in gethandler', result);
  res.status(200).json(result);
})

exports.getIdHandler = asyncWrapper(async(req, res) => {
  // the string that we get from request is almost entirely anencrypted code
  // The first the characters are the gameId and those can't be encrypted bec we need them to get secret
  const encrypted = req.params.id.slice(3);
  const machineId = req.params.id.slice(0, 3);
  //using decrypt method from blowfish.js to get decrypted data
  const decrypted = decrypt(encrypted, machineId);
  let gameId = decrypted.slice(0, 2);
  const gameData = await req.model.read(gameId);
  const result = filterData(decrypted, gameData);
  res.json(result);
})
exports.postHandler = asyncWrapper(async(req, res) => {
  const result = await req.model.create(req.body);
  res.json(result);
})
exports.putIdHandler = asyncWrapper(async(req, res) => {
  const result = await req.model.update(req.params.id, req.body);
  //method that updates a document in db
  res.status(200).json(result);
})
exports.deleteIdHandler = asyncWrapper(async(req, res) => {
  const result = await req.model.delete(req.params.id);
  res.status(202).json(result);
})

//Parse and filter
const parseCode = (codeString) => {
  const re = /(([1-9].{2})+)+0(\d+?)(\d{4})$/
  const match = codeString.match(re);
  if (match === null || match[1] === undefined) {
    return ["", "", ""];
  }
  return [match[1].match(/.{3}/g), match[3], match[4]]
}

const filterData = ((string, gameData) => {
  gameData = JSON.parse(JSON.stringify(gameData));
  let splitCodeString = string.slice(3);
  let result = parseCode(splitCodeString);
  gameData.score = result[1];
  gameData.ballTime = result[2];
  let modeObject = result[0].reduce((acc, curr) => {
    console.log('')
    let key = curr.slice(0, 2)
    let value = curr.slice(2)
    acc[key] = value;
    return acc;
  }, {});

  gameData.modes.forEach(mode => {
    mode.status = mode.statuses[modeObject[mode.key]];
    mode.statuses = undefined;
  })
  
  gameData.modes = gameData.modes.filter(mode => {
    if (mode.key in modeObject) {
    } else {
      console.log('not including mode ' + mode.name)
    }
    return mode.key in modeObject;
  })
  return gameData;
});