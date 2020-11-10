'use strict';

const express = require('express');
const router = express.Router();
// const GameCollection = require('../crud')
const asyncWrapper = require('./middleware/aync-wrapper');
const paramsToModel = require('./middleware/param-to-model');


// uses the object in the body of the request to create a new “record”
router.post('/:model', paramsToModel ,asyncWrapper(async (req, res ) => {
    console.log('in post route', req.model);
    const result = await req.model.create(req.body);
console.log('req model in post route', result)
    res.json(result);

}));

router.get('/:model/:id', paramsToModel, asyncWrapper(async (req, res) => {
    console.log('in get route', req.model);
    const result = await req.model.read(req.params.id);
    console.log('getting result from get route', result);

    res.json(result);
    console.log('result', result);
    //this returns the name of the product at the id
    // in Postman I have to pass in the id in the body
}));

//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:model/:id', asyncWrapper (async (req, res) => {
    const result = await req.model.update(req.params.id, req.body);
       //method that updates a document in db
    res.status(200).json(result);
}));

//deletes the record with the :id specified`
router.delete('/:model/:id', paramsToModel, asyncWrapper (async(req, res) => {
    const result = await req.model.delete(req.params.id);
    res.status(202).json(result);
}));

//get all categories
router.get('/:model', paramsToModel, asyncWrapper (async (req, res) => {
    const result = await req.model.readAll();
    res.status(200).json(result);
}));

module.exports = router;