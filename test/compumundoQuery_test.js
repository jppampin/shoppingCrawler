var should = require('chai').should();
var CompumundoQuery = require('../model/compumundoQuery')
var testObject = new CompumundoQuery();

describe('Compumundo Tests', function () {
	it('should return an url', function() {
		var result = testObject.getUrl('auriculares philips');
		result.should.not.be.empty;
	});

})
