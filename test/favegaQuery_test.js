var should = require('chai').should();
var FravegaQuery = require('../model/fravegaQuery')
var testObject = new FravegaQuery();

describe('FravegaQuery Tests', function () {
	it('should return an url', function() {
		var result = testObject.getUrl('auriculares philips');
		result.should.not.be.empty;
	});

})
