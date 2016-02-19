var should = require('chai').should();
var RodoQuery = require('../model/rodoQuery')
var testObject = new RodoQuery();

describe('RodoQuery Tests', function () {
	it('should return an url', function() {
		var result = testObject.getUrl('auriculares philips');
		result.should.not.be.empty;
	});

})
