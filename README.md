# Pinstrat

### Authors:

Riva Davidowski  ||   Kevin McNeil  ||   Robert Rizo

### Client: Pinstrat

### About Project PinStrat:

  For this project, we were lucky enough to have access to a client (another dev) who is developing a web application in need of a backend server. The client is Pinstrat, and Pinstrat is developing a way to deliver customized strategy guides for players of pinball and video games. 

  The idea for Pinstrat was driven by a desire to build pinball games with more elaborate stories and complicated game play than a typical pinball game. However, a challenge is that it’s very hard to communicate story and gameplay rules through the machine itself as the player plays.

  Pinstrat provides a website that the player can visit after playing a game (for our project, we focused solely on the Mass Effect pinball game created by the client). The website displays story details, game rules, and strategy tips customized specifically based on HOW the player did in the game they just played. 

####  There were three main problems for the client:
 
-  Client didn’t need all the game data all the time, but pieces of the data that are relevant to that specific player.

-  The code used to describe players game was in plain text so codes could be manipulated/forged

-  Changes to the game data, even simple string changes required a full redeployment of the website

####  The client asked us to do the following:

-  Take the game data and store in a DB instead of JSON. 

-  We had to find a way to deliver only data that is relevant to a player

-  Use encryption on the request to prevent access to game data that the player hasn’t unlocked during gameplay

-  Implement an oauth protected CMS (content management system) so admins can create new games and update existing game data

#### Usability

After cloning the repo, you will need to add an .env file to hold your port number and mongodb URI connection string. You will want to do an npm install on the dependecies below ensuring that you are running nodemon in the console for the application. 

This backend server is only compatible with Pinstrat's frontend site.


**You will need to install the following on your machine:**

    - `npm init -y `
    - **The entry point for this app is: `index.js`**
    - `npm i` for the following:
       
        "@code-fellows/supergoose": "^1.0.11",
        "chalk": "^4.1.0",
        "cli-spinner": "^0.2.10",
        "cors": "^2.8.5",
        "crypto": "^1.0.1",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "jest": "^26.6.3",
        "mongodb": "^3.6.3",
        "mongoose": "^5.10.13",
        "node-mocks-http": "^1.9.0",
        "nodemon": "^2.0.6",
        "superagent": "^6.1.0",
        "supertest": "^6.0.1"

- Install MongoDB: `npm install mongodb`
- Install mongoose: `npm install -save--dev mongoose`
- Visit [docs.mongodb.com](https://docs.mongodb.com/manual/tutorial/getting-started/) to learn How to get started using MongoDB.

- Start server:

```

    /* give it a port number and optionally pass a function to call when app
     starts listening on given port*/

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

```


- Connect to your db:

```

//Connect to Database
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));

```

#### env Requirements:

```
PORT=3001
MONGODB_URI=(add db URI here)
TEST_MONGODB_URI=
MACHINE_ID_MD7=
```


#### Overview UML:

![UML](https://raw.githubusercontent.com/401-Midterm/pinstrat/main/midtem%20UML%201.jpg)

### Testing:

 PASS  __tests__/debug-logger.test.js
 
 - ✓ Debugger logger testing (3 ms)

 PASS  __tests__/500.test.js
  We are testing our 500 error message
  -  ✓ Checking the specs of the error 500 page (1 ms)

 PASS  __tests__/server.test.js
  We can test our server.js paths and connections
  -  ✓ Server.js is able to communicate to our Mongo DB (2 ms)
  -  ✓ We will get a 404 error if we do not follow a set path (14 ms)
  -  ✓ Testing 500 error if we have no arguments

 PASS  __tests__/404.test.js
  We are testing our 404 error message
  -  ✓ should go to 404 page (2 ms)

 PASS  __tests__/index.test.js
  We can connect to Mongo DB at index.js
  -  ✓ We can test our connection to Mongo DB (3 ms)
  -  ✓ We can close our connection to Mongose DB as needed. (2 ms)


### Asset Attributions:

- UML Background from wallup.net

- Pinball Vector – https://depositphotos.com/

- QR, DB, and  Scanner vectors: https://www.vecteezy.com/vector-art/87056-linear-computer-security-vector-icons
Author: Miguel Angel

- Model, controller, and router icons: https://www.vecteezy.com/vector-art/668339-set-of-duotone-thin-line-network-analysis-icons
Author: Kanin Abhiromsawat 


