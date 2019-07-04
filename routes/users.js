var getUserById = function(req, res, next){
	res.send(200, {'user' : {
    		'id': 'a0ece5db-cd14-4f21-812f-966633e7be86',
      		'name': 'Britney',
      		'email': 'britneyblankenship@quotezart.com',
      		'role': 'admin'
		}
	});
	next();
}

var getUserByName = function(req, res, next){
	res.send(200, {'user' : {
    		'id': 'a0ece5db-cd14-4f21-812f-966633e7be86',
      		'name': 'Britney',
      		'email': 'britneyblankenship@quotezart.com',
      		'role': 'admin'
		}
	});
	next();	
}

module.exports.getUserById = getUserById
module.exports.getUserByName = getUserByName
