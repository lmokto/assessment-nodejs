var restify = require('restify');
var mongoose = require('mongoose');

var config = require('./config');
var policies = require('./routes/policies');
var authentication = require('./routes/authentication');
var users = require('./routes/users');
var server = restify.createServer();

mongoose.connect(config.database.uri);

server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.jsonp());

server.get('/', function root(req, res, next) {
    var routes = [
        'POST    /login',
    	'GET     /user/:id',
        'GET     /user/name/:name',
        'GET     /policies/:name',
        'GET     /policies/:number/user'
    ];
    res.send(200, routes);
	next();
});

server.post('/login', authentication.userAuth);
server.get('/user/:id', authentication.verifyToken, users.getUserById);
server.get('/user/name/:name', authentication.verifyToken, users.getUserByName);
server.get('/policies/:name', authentication.verifyToken, policies.getPoliciesByUser);
server.get('/policies/:number/user', authentication.verifyToken, policies.getUserByPolicyNumber);


server.listen(config.server.port, function () {
	const url = config.server.protocol + config.server.hostname + ":" +config.server.port + "/";
	console.log('ready on %s', url);
});
