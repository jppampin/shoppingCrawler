var should = require('chai').should();
var Garbarino = require('../model/garbarino')
var testObject = new Garbarino();
var path = require('path');
var html = require('fs').readFileSync(path.join(__dirname ,'../garbarino.html'), 'utf8');

describe('Garbarino Tests', function () {
	it('should have a list of items', function() {
			var result = testObject.mapToProducts(html);
			result.should.have.length.of(12);
	});

	it('should return a product with properties loaded', function() {
		var result = testObject.mapToProducts(html);
		var product = result[0];
		
		product.source.should.not.to.be.empty;
		product.imgUrl.should.not.to.be.empty;
		product.name.should.not.to.be.empty;
		product.price.should.not.to.be.empty;
	
	});
})
