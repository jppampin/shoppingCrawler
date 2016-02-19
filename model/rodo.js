var cheerio = require('cheerio');
var Product = require('./product');

function Rodo(){
	this.mapToProduct = function ($, element) {
		var $product = $(element);	
		var product = new Product();

		product.source = "Rodo";
		product.imgUrl = $product.find('a img').attr('src');
		product.name = $product.find('h2.product-name a').text();
		//product.description = description;
		product.price = $product.find('span.price').text();

		return product;
	}

	this.mapToProducts = function (html) {
		var $ = cheerio.load(html);
		var productNodes = $('li.item');
		var products = [];
		var me = this;

		productNodes.each(function(i, productNode){
			products.push(me.mapToProduct($, productNode));
		});

		return products;
	}
}

module.exports = Rodo;