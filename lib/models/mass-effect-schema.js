'use strict';

const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
  gameId: String,
  gameRev: String,
  name: String,
  fontFamily: String,
  overview: {
    intro: String,
    summaries: [ {
      name: String,
      description: String,
      priority: Number,
    }],
  },
  modes: [ {
    key: Number,
    name: String,
    summary: String,
    description: String,
    resume: String,
    timeLimitSecs: Number,
    image: String,
    color: String,
    statuses: {
      '0': {
        name: String,
        instructions: String,
      } ,
      '1': {
        name: String,
        instructions: String,
      } ,
      '2': {
        name: String,
        instructions: String,
      } ,
      '3': {
        name: String,
        instructions: String,
      } ,
      '4': {
        name: String,
        instructions: String,
      } ,
      '5': {
        name: String,
        instructions: String,
      } ,
      '6': {
        name: String,
        instructions: String,
      } ,
      '7': {
        name: String,
        instructions: String,
      } ,
      '8': {
        name: String,
        instructions: String,
      } ,
      '9': {
        name: String,
        instructions: String,
      }
    }
  }]
});

module.exports = GameSchema;
