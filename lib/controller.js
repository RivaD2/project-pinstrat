'use strict';

// Route Handlers

exports.getHandler = async function (req, res) {
  const result = await req.model.readAll();
  res.status(200).json(result);
}

exports.postHandler = async function (req, res) {
  console.log('in post route', req.model);
  const result = await req.model.create(req.body);
  console.log('req model in post route', result)
  res.json(result);
}

// By ID handlers

exports.getIdHandler = async function (req, res) {
  console.log('in get route', req.model);
  const result = await req.model.read(req.params.id);
  console.log('getting result from get route', result);
  res.json(result);
  console.log('result', result);
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