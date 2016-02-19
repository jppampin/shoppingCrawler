var should = require('chai').should();
var MusimundoQuery = require('../model/musimundoQuery')
var testObject = new MusimundoQuery();

describe('MusimundoQuery Tests', function () {
	it('should return an url', function() {
		var result = testObject.getUrl('auriculares philips');
		result.should.not.be.empty;
	});

})
