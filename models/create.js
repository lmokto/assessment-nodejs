var bcrypt = require('bcryptjs');
var User = require('./user');
var mongoose = require('mongoose');
var config = require('../config')

var createUser = function(name, email, role, password){
	mongoose.connect(config.database.uri);
	User.create({
		name : name,
	    email : email,
	    role: role,
	    password : bcrypt.hashSync(password, 8)
	}, function (err, user) {
		console.log(user);
		mongoose.disconnect()
	});
}


createUser('Test1', 'test1@gmail.com', 'admin', 'test123')
createUser('Test2', 'test2@gmail.com', 'user', 'test1234')