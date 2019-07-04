var restify = require('restify');
var config = require('./config');

var policies = require('./routes/policies');
var users = require('./routes/users');

var server = restify.createServer();


server.pre(restify.pre.sanitizePath());

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.bodyParser());


server.get('/', function root(req, res, next) {
    var routes = [
    	'GET     /user/:id',
        'GET     /user/:name',
        'GET     /policies/:user',
        'GET     /policies/:number/user'
    ];
    res.send(200, routes);
	next();
});

server.get('/user/:id', users.getUserById);
server.get('/user/name/:name', users.getUserByName);
server.get('/policies/:user', policies.getPoliciesByUser);
server.get('/policies/:number/user', policies.getUserByPolicyNumber);


server.listen(config.server.port, function () {
	const url = config.server.protocol + config.server.hostname + ":" +config.server.port + "/";
	console.log('ready on %s', url);
});
