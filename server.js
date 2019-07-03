var restify = require('restify');
var config = require('./config');
var server = restify.createServer();

server.listen(config.server.port, function () {
	const url = config.server.protocol + config.server.hostname + ":" +config.server.port + "/";
	console.log('ready on %s', url);
});
