'use strict';

const GameCollection = require('../../crud');

module.exports = function (req, res, next){
    switch (req.params.model) {
        case 'games':
            req.model = new GameCollection();
            break;
        default:
            res.status(404).send('Unknown model type');
            return;
    }
    next();
}

