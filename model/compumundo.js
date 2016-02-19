var cheerio = require('cheerio');
var Product = require('./product');

function Compumundo(){
	this.mapToProduct = function ($, element) {
		var $product = $(element);	
		var product = new Product();

		product.source = "Compumundo";
		product.imgUrl = $product.find('img.img-loading.ng-scope').attr('src');
		product.name = $product.find('h3.product-title').text();
		//product.description = description;
		product.price = $product.find('div.online-price span.value').text();

		return product;
	}

	this.mapToProducts = function (html) {
		var $ = cheerio.load(html);
		var productNodes = $('div[product=product]');
		var products = [];
		var me = this;

		productNodes.each(function(i, productNode){
			products.push(me.mapToProduct($, productNode));
		});

		return products;
	}
}

module.exports = Compumundo;