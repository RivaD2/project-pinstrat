'use strict';

module.exports = (error, req, res, next) => {
  res.status(error.status || 404);
};


// module.exports = function (err,req, res, next) {
//   res.status(404)
//   res.send({
//     error: 'Not Found'
//   })
// }
