'use strict';

module.exports = (error, req, res, next) => {
  console.log('500 middleware setting status')
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
};
