var bcrypt = require('bcryptjs');
var User = require('./user');
var mongoose = require('mongoose');
var config = require('../config');
var users = require('./users.json');

mongoose.connect(config.database.uri, { useNewUrlParser: true });

User.insertMany(users,  function(error, docs) {
	if (error) console.error(error);
	console.log("Users were inserted", docs);
	mongoose.disconnect()
});
