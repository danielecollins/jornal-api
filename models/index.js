const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.jornal = require('./jornal.js')(mongoose);
db.user = require('./user.js')(mongoose);

module.exports = db;