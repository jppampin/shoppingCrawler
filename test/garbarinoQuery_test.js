var should = require('chai').should();
var GarbarinoQuery = require('../model/garbarinoQuery')
var testObject = new GarbarinoQuery();

describe('GarbarinoQuery Tests', function () {
	it('should return an url', function() {
		var result = testObject.getUrl('auriculares philips');
		result.should.not.be.empty;
	});

})
