'use strict';

const express = require('express');
const router = express.Router();
const paramsToModel = require('./middleware/param-to-model');
const controller = require('./controller.js')

// uses the object in the body of the request to create a new “record”
router.post('/:model(*)', paramsToModel, controller.postHandler);

//get the object by a specific :id
router.get('/:model/:id(*)', paramsToModel, controller.getIdHandler);

//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:model/:id(*)', paramsToModel, controller.putIdHandler);

//deletes the record with the :id specified`
router.delete('/:model/:id(*)', paramsToModel, controller.deleteIdHandler);

//get all categories
router.get('/:model(*)', paramsToModel, controller.getHandler);

module.exports = router;
