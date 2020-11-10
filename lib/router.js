'use strict';

const express = require('express');
const router = express.Router();
// const GameCollection = require('../crud')
const asyncWrapper = require('./middleware/aync-wrapper');
const paramsToModel = require('./middleware/param-to-model');
const controller = require('./controller.js')

try{
// uses the object in the body of the request to create a new “record”
router.post('/:model', paramsToModel ,asyncWrapper, controller.postHandler);
} catch {
    console.log('error in router.js: post-model route');
}

try{
//get the object by a specific :id
router.get('/:model/:id', paramsToModel, asyncWrapper, controller.getIdHandler);
} catch {
    console.log('error in router.js: post-model route');
}

try{
//uses the object in the body to replace the record with the :id specified
//updating all information using put
router.put('/:model/:id', asyncWrapper, controller.puIdHandler);
} catch {
    console.log('error in router.js: post-model route');
}

try{
//deletes the record with the :id specified`
router.delete('/:model/:id', asyncWrapper, controller.deleteIdHandler);
} catch {
    console.log('error in router.js: post-model route');
}

try{
//get all categories
router.get('/:model', asyncWrapper, controller.getHandler);
} catch {
    console.log('error in router.js: post-model route');
}

module.exports = router;