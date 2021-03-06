var should = require('chai').should();
var Musimundo = require('../model/musimundo')
var testObject = new Musimundo();
var path = require('path');
var html = require('fs').readFileSync(path.join(__dirname ,'../musimundo.html'), 'utf8');

describe('Musimundo Tests', function () {
	it('should have a list of items', function() {
			var result = testObject.mapToProducts(html);
			result.should.have.length.of(16);
	});

	it('should return a product with properties loaded', function() {
		var result = testObject.mapToProducts(html);
		var product = result[0];

		product.should.have.property("source", "Musimundo");
		product.imgUrl.should.not.to.be.empty;
		product.name.should.not.to.be.empty;
		product.price.should.not.to.be.empty;
	
	});
})
