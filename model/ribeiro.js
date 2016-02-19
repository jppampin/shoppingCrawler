var cheerio = require('cheerio');
var Product = require('./product');

function Ribeiro(){
	this.mapToProduct = function ($, element) {
		var $product = $(element);	
		var product = new Product();

		product.source = "Ribeiro";
		product.imgUrl = $product.find('span.atg_store_productImage img').attr('src');
		product.name = $product.find('span.prodNom').text();
		//product.description = description;
		product.price = $product.find('span.precio_big').text();

		return product;
	}

	this.mapToProducts = function (html) {
		var $ = cheerio.load(html);
		var productNodes = $('ul.atg_store_product li');
		var products = [];
		var me = this;

		productNodes.each(function(i, productNode){
			products.push(me.mapToProduct($, productNode));
		});

		return products;
	}
}

module.exports = Ribeiro;