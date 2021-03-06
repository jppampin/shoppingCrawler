var should = require('chai').should();
var Ribeiro = require('../model/ribeiro')
var testObject = new Ribeiro();
var path = require('path');
var html = require('fs').readFileSync(path.join(__dirname ,'../ribeiro.html'), 'utf8');

describe('Ribeiro Tests', function () {
	it('should have a list of items', function() {
			var result = testObject.mapToProducts(html);
			result.should.have.length.of(16);
	});

	it('should return a product with properties loaded', function() {
		var result = testObject.mapToProducts(html);
		var product = result[0];

		product.should.have.property("source", "Ribeiro");
		product.imgUrl.should.not.to.be.empty;
		product.name.should.not.to.be.empty;
		product.price.should.not.to.be.empty;
	
	});
})
