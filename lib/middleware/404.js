'use strict';

module.exports = (error, req, res, next) => {
  res.status(error.status || 404);
};