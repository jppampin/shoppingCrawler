var cheerio = require('cheerio');
var Product = require('./product');

function Carrefour(){
	this.mapToProduct = function ($, element) {
		var $product = $(element);	
		var product = new Product();

		product.source = "Carrefour";
		product.imgUrl = $product.find('a.product-image img').attr('src');
		product.name = $product.find('h2.product-name').text();
		//product.description = description;
		product.price = $product.find('span.price').text();

		return product;
	}

	this.mapToProducts = function (html) {
		var $ = cheerio.load(html);
		var productNodes = $('ul.products-grid li.item');
		var products = [];
		var me = this;

		productNodes.each(function(i, productNode){
			products.push(me.mapToProduct($, productNode));
		});

		return products;
	}
}

module.exports = Carrefour;