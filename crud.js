'use strict';
const mongoose = require('mongoose');
// const GameModel = require('./lib/models/mass-effect-model')
// const GameSchema = 
class Collections {
   
    constructor(modelName,schema) {
        this.model = mongoose.model(modelName, schema);
    }
    //create() method is different for each model as schema is slightly different
    //read() performs a find()
    async create(object) {
        let newEntry = new this.model(object);
        return await newEntry.save();


    }
    async read(id) {
        const oneEntry = await this.model.find({_id: id});
        return oneEntry[0];
    }

    async readAll() {
        const allEntries = await this.model.find({});
        return allEntries;
    }

    async update(id, body) {
      const entry =  await this.model.findByIdAndUpdate(id, body, {
          //telling Mongo to return updated version of the data
          new: true
      });
      if (entry === null) {
         return null;
      }
      // after we update the doc we want to save it
      await entry.save();
      return entry
   }

   async delete(id) {
      const entry =  await this.model.findByIdAndDelete(id);
      if ( entry === null) {
         return null;
      }
   }
}

module.exports = Collections;