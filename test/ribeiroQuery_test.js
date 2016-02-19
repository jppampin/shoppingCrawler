var should = require('chai').should();
var RibeiroQuery = require('../model/ribeiroQuery')
var testObject = new RibeiroQuery();

describe('RibeiroQuery Tests', function () {
	it('should return an url', function() {
		var result = testObject.getUrl('auriculares philips');
		result.should.not.be.empty;
	});

})
