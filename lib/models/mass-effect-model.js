'use strict';
const mongoose = require('mongoose');
const GameSchema = require('./mass-effect-schema');
const GameModel = mongoose.model('Pinstrat', GameSchema);

module.exports = GameModel;