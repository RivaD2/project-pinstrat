'use strict';
const mongoose = require('mongoose');
const GameSchema = require('./mass-effect-schema');


const GameModel = mongoose.model('GameModel', GameSchema);

module.exports = GameModel;