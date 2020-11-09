'use strict';

//Create a schema structure
const gameSchema = new mongoose.Schema({
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
        ]
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
                "0": {
                    name: String,
					instructions: String,
                } 

            }
    ]
    });


module.exports = gameSchema;