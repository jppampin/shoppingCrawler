var cheerio = require('cheerio');
var Product = require('./product');

function Fravega(){
	this.mapToProduct = function ($, element) {
		var $product = $(element);	
		var product = new Product();

		product.source = "Fravega";
		product.imgUrl = $product.find('a img').attr('src');
		product.name = $product.find('h3 a').text();
		//product.description = description;
		product.price = $product.find('a em.BestPrice').text();

		return product;
	};

	this.mapToProducts = function (html) {
		var $ = cheerio.load(html);
		var productNodes = $('div.shelf li');
		var products = [];
		var me = this;

		productNodes.each(function(i, productNode){
			products.push(me.mapToProduct($, productNode));
		});

		return products;
	};
}

module.exports = Fravega;