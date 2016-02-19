var should = require('chai').should();
var CotoQuery = require('../model/cotoQuery')
var testObject = new CotoQuery();

describe('CotoQuery Tests', function () {
	it('should return an url', function() {
		var result = testObject.getUrl('auriculares philips');
		result.should.not.be.empty;
	});

})
