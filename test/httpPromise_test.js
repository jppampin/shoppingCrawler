var should = require('chai').should();
var httpPromise = require('../model/httpPromise')


describe('httpPromise Tests', function () {
	it('Should return a list of products', function(done) {
			httpPromise.get('http://www.google.com').then(function resolved(data) {
				data.should.not.be.empty;
				done();
			})
			.catch(function onError(err) {
				throw new Error(err);
				done();
			})
	});

})
