var should = require('chai').should();
var Favega = require('../model/fravega')
var testObject = new Favega();
var path = require('path');
var html = require('fs').readFileSync(path.join(__dirname ,'../fravega.html'), 'utf8');

describe('Favega Tests', function () {
	it('should have a list of items', function() {
			var result = testObject.mapToProducts(html);
			result.should.have.length.of(24);
	});

	it('should return a product with properties loaded', function() {
		var result = testObject.mapToProducts(html);
		var product = result[0];

		product.should.have.property("source", "Fravega");
		product.imgUrl.should.not.to.be.empty;
		product.name.should.not.to.be.empty;
		product.price.should.not.to.be.empty;
	
	});
})
