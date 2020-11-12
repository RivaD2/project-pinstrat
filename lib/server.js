'use strict';

const express = require('express');
const app = express()
let router = express.Router()
const port = process.env.PORT || 3001;
const logger = require('./middleware/presentation-logger.js')
app.use(express.json());
require('dotenv').config();
app.use(router);

const serverError = require('./middleware/500');
const asyncWrapper = require('./middleware/aync-wrapper');
const notFoundError = require('./middleware/404');
const collectionsRouter = require('./router');

router.use(collectionsRouter);
router.use(serverError);
router.use(notFoundError);
router.use(asyncWrapper);

module.exports = {
  app: app,
  start: function () {
    app.listen(port, () =>
      logger(1, `Listening on port ${port}   `)
    );
  }
}
