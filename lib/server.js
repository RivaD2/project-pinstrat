'use strict';

const express = require('express');
const app = express()
let router = express.Router()
const port = process.env.PORT || 3001;
app.use(express.json());
require('dotenv').config();
app.use(router);
const cors = require('cors')

//middleware
const logger = require('./middleware/logger');
const serverError = require('./middleware/500');
const asyncWrapper = require('./middleware/aync-wrapper');
const notFoundError = require('./middleware/404');


//Importing Routes for categories and products:
const collectionsRouter = require('./router');
router.use(collectionsRouter);

//loading middleware
router.use(logger);
router.use(serverError);
router.use(notFoundError);
router.use(asyncWrapper);

module.exports = {

    app: app,
    start: function () {

        //connect to server;
        /*give it a port number and optionally pass a function to call when app
        starts listening on given port*/
        app.listen(port, () => console.log(`Listening on port ${port}...`));

    }
}