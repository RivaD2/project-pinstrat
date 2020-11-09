'use strict';

//Create a schema structure
const GameSchema = new mongoose.Schema({
    // When this is stored, each obj in array will be key value pair
        // The key will be the index and the value will be the string
    gameId: Number ,
	gameRev: Number,
	name: String,
	fontFamily: String,
	overview: {
        intro: String,
        summaries: [ {
            name: String,
            description: String,
            priority: Number,
        },
        ],
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
                //revisit this and find way to increment object in a clean way
                "0": {
                    name: String,
					instructions: String,
                } ,
                "1": {
                    name: String,
					instructions: String,
                } ,
                "2": {
                    name: String,
					instructions: String,
                } ,
                "3": {
                    name: String,
					instructions: String,
                } ,
                "4": {
                    name: String,
					instructions: String,
                } ,
                "5": {
                    name: String,
					instructions: String,
                } ,
                "6": {
                    name: String,
					instructions: String,
                } ,
                "7": {
                    name: String,
					instructions: String,
                } ,
                "8": {
                    name: String,
					instructions: String,
                } ,
                "9": {
                    name: String,
					instructions: String,
                } 
            }
        }]
    }
});

module.exports = GameSchema;


