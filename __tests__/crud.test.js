'use strict';
const supergoose = require('@code-fellows/supergoose');
const server = require('../lib/server');
const testServer = supergoose(server.app);
const GameCollection = require('../crud')
//Create unit tests for your middleware
//Every route should respond with the right status code and the expected data
//CRUD tests for your collection classes
let collectionInstance;
const createGame = async () => {
    const createdGame = await collectionInstance.create(game);
    game.id = createdGame.id;
}
//before test runs, I have to add item to the DB
let game = 
{
    "gameId": "13",
    "gameRev": "0",
    "name": "Mass Effect 2",
    "fontFamily": "me123",
    "overview": {
        "intro": "Entire human colonies are disappearing without a trace.\n\nYou are Commander Shepard.",
        "summaries": [
            {
                "name": "Recruit a Squad",
                "description": "In order to survive the mission through the Omega 4 Relay, you're going to need a team of the best soldiers, scientists, and mercenaries in the galaxy.\n\nYou start the game with two squadmates: Jacob and Miranda. Five recruitment missions are unlockable from the beginning of the game—hit any lane 3x to enable the mission for that squadmate. After you complete the mission, they will join your team and a new squadmate can be unlocked from the same lane.",
                "priority": 2
            },
        ]
    }
}
describe('/GET', () => {
    beforeAll(async () => {
        collectionInstance = new GameCollection();
        await createGame();
    })
    it('should return all game data', async () => {
        const res = await testServer.get('/games')
        expect(res.body[0].name).toBe(game.name);
        expect(res.status).toBe(200);
    });
    it('should get one game', async () => {
            const res = await testServer.get('/games/' + game.gameId)
                expect(res.body.name).toBe(game.name);
                expect(res.status).toEqual(200)
    })
});

describe('/PUT', () => {
    beforeAll(async () => {
        // supergoose.startDB();
        collectionInstance = new GameCollection();
        await createGame();
    })
    it('should update a game', async () => {
        const res = await testServer.put('/game/' + game.gameId).send({
            
                name: "Fifth Element"
            })
                //express returns a null response as an empty object
                expect(res.body.name).toBe(game.name);
                expect(res.status).toBe(200);
            })
    });
    describe('/DELETE', () => {
        beforeAll(async () => {
            // supergoose.startDB();
            collectionInstance = new GameCollection();
             await createGame();
    
        })
        it('should delete a game', async () => {
            const res = await testServer.delete('/game/' + game.gameId)
                    expect(res.body).toEqual('');
                    expect(res.status).toBe(202);
        });
    });