var should = require('chai').should();
var Searcher = require('../model/searcher')
var testObject = new Searcher();

describe('Searcher Tests', function () {
	it('Should return a list of products', function(done) {
			var resultPromise = testObject.fetch('philips');
			this.timeout(30000);

			resultPromise.then(function (products) {
				products.should.have.any;
				console.log(products);
				done();
			});
	});

})
