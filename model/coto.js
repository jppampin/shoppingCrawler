var cheerio = require('cheerio');
var Product = require('./product');

function Coto(){
	this.mapToProduct = function ($, element) {
		var $product = $(element);	
		var product = new Product();

		product.source = "Coto";
		product.imgUrl = $product.find('span.atg_store_productImage img').attr('src');
		product.name = $product.find('span.atg_store_productTitle').text();
		//product.description = description;
		product.price = $product.find('span.atg_store_newPrice').text();

		return product;
	}

	this.mapToProducts = function (html) {
		var $ = cheerio.load(html);
		var productNodes = $('#products li');
		var products = [];
		var me = this;

		productNodes.each(function(i, productNode){
			products.push(me.mapToProduct($, productNode));
		});

		return products;
	}
}

module.exports = Coto;