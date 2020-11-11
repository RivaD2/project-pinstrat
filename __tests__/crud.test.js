'use strict';
const supergoose = require('@code-fellows/supergoose');
const server = require('../lib/server');
const testServer = supergoose(server.app);

//Create unit tests for your middleware
//Every route should respond with the right status code and the expected data
//CRUD tests for your collection classes
let GameCollection;
const createGame = async () => {
    const createdGame = await GameCollection.create(game);
    game.id = createdGame.id;
}
//before test runs, I have to add item to the DB
let Game = {
    
}
describe('/GET', () => {
    beforeAll(async () => {
        GameCollection = new GameCollection();
        await createGame();
    })
    beforeEach(() => {
    })
    it('should return all game data', async () => {
        await testServer.get('/:model')
            .then(res => {
                expect(res.body.length).toEqual(1);
                expect(res.body[0].name).toEqual(game.name);
                expect(res.status).toBe(200);
            })
    });
    it('should get one game', async () => {
        await testServer.get('/:model/:id' + game.id)
            .then(res => {
                expect(res.body.name).toBe(game.name);
                expect(res.status).toEqual(200);
            })
    });
   
});
describe('/PUT', () => {
    beforeAll(async () => {
        // supergoose.startDB();
        GameCollection = new GameCollection();
        await createGame();
    })
    beforeEach(() => {
    })
    it('should update a game', async () => {
        await testServer.put('/:model/:id' + game.id).send({
                category: 'Canned Goods'
            })
            .then(res => {
                //express returns a null response as an empty object
                expect(res.body.category).toBe('');
                expect(res.status).toBe(200);
            })
    });

});
    describe('/DELETE', () => {
        beforeAll(async () => {
            // supergoose.startDB();
            GameCollection = new GameCollection();
             await createGame();
    
        })
        beforeEach(() => {
        })
        it('should delete a game', async () => {
            await testServer.delete('/:model/:id' + game.id)
                .then(res => {
                    expect(res.body).toEqual('');
                    expect(res.status).toBe(202);
                })
        });
    });