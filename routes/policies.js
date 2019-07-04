var getPoliciesByUser = function(req, res, next){
    res.send(200, { 'policies': [{
	      'id': "6f514ec4-1726-4628-974d-20afe4da130c",
	      'amountInsured': 697.04,
	      'email': 'inesblankenship@quotezart.com',
	      'inceptionDate': '2014-09-12T12:10:23Z',
	      'installmentPayment': false,
	      'clientId': 'a0ece5db-cd14-4f21-812f-966633e7be86'
	    },
	    {
	      'id': '7b624ed3-00d5-4c1b-9ab8-c265067ef58b',
	      'amountInsured': 399.89,
	      'email': 'inesblankenship@quotezart.com',
	      'inceptionDate': '2015-07-06T06:55:49Z',
	      'installmentPayment': true,
	      'clientId': 'a0ece5db-cd14-4f21-812f-966633e7be86'
	    }]
 	});
	next();
}

var getUserByPolicyNumber = function(req, res, next){
	res.send(200, {'user' : {
    		'id': 'a0ece5db-cd14-4f21-812f-966633e7be86',
      		'name': 'Britney',
      		'email': 'britneyblankenship@quotezart.com',
      		'role': 'admin'
		}
	});
	next();
}

module.exports.getPoliciesByUser = getPoliciesByUser
module.exports.getUserByPolicyNumber = getUserByPolicyNumber
