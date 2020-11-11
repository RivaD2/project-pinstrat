'use strict';

const sampleData = require('../sampledata.json')

// Route Handlers

exports.getHandler = async function (req, res) {
  const result = await req.model.readAll();
  res.status(200).json(result);
}

exports.postHandler = async function (req, res) {
  const result = await req.model.create(req.body);
  res.json(result);
}

// By ID handlers

exports.getIdHandler = async function (req, res) {
  const result = await req.model.read(req.params.id);
  res.json(result);
  //this returns the name of the product at the id
  // in Postman I have to pass in the id in the body
}

exports.putIdHandler = async function (req, res) {
  const result = await req.model.update(req.params.id, req.body);
  //method that updates a document in db
  res.status(200).json(result);
}

exports.deleteIdHandler = async function (req, res) {
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
