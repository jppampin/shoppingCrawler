var should = require('chai').should();
var Searcher = require('../model/searcher')
var testObject = new Searcher();

describe('Searcher Tests', function () {
	it('Should return a list of products', function() {
			var result = testObject.fetch('philips');
			result.should.have.any; 
	});

})
