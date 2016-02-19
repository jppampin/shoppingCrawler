var cheerio = require('cheerio');
var Product = require('./product');

function Musimundo(){
	this.mapToProduct = function ($, element) {
		var $product = $(element);	
		var product = new Product();

		product.source = "Musimundo";
		product.imgUrl = $product.find('a.img img').attr('src');
		product.name = $product.find('a.name').text();
		//product.description = description;
		product.price = $product.find('span.price').text();

		return product;
	}

	this.mapToProducts = function (html) {
		var $ = cheerio.load(html);
		var productNodes = $('article.product');
		var products = [];
		var me = this;

		productNodes.each(function(i, productNode){
			products.push(me.mapToProduct($, productNode));
		});

		return products;
	}
}

module.exports = Musimundo;