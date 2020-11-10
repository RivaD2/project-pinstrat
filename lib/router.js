'use strict';

const express = require('express');
const router = express.Router();
// const GameCollection = require('../crud')
const asyncWrapper = require('./middleware/aync-wrapper');
const paramsToModel = require('./middleware/param-to-model');
const controller = require('./controller.js')

// uses the object in the body of the request to create a new “record”
router.post('/:model', paramsToModel ,asyncWrapper, controller.postHandler);

//get the object by a specific :id
router.get('/:model/:id', paramsToModel, asyncWrapper, controller.getIdHandler);

//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:model/:id', asyncWrapper, controller.putIdHandler);

//deletes the record with the :id specified`
router.delete('/:model/:id', asyncWrapper, controller.deleteIdHandler);

//get all categories
router.get('/:model', asyncWrapper, controller.getHandler);

module.exports = router;