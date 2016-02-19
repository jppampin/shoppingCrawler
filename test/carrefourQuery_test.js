var should = require('chai').should();
var CarrefourQuery = require('../model/carrefourQuery')
var testObject = new CarrefourQuery();

describe('Carrefour Tests', function () {
	it('should return an url', function() {
		var result = testObject.getUrl('auriculares philips');
		result.should.not.be.empty;
	});

})
