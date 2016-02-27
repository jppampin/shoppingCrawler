const Q = require('q');
const fs = require('fs');
const fs_readDir = Q.denodeify(fs.readdir);
const path = require('path');
const httpPromise = require('./httpPromise');

const models = {};

/// Loading modules
console.info('loading!!!!');
fs.readdirSync( path.join(__dirname) ).filter(function onFilter(file) {
	return file !== "searcher.js" && file !== "httpPromise.js";
}).forEach(function (file) {
	var ModuleClass = require(path.join(__dirname, file));
	models[path.basename(file, ".js")] = new ModuleClass();
});

function Searcher(){
	this.providers = [];

	this.fetch = function(query){
		var musimundoUrl = models.musimundoQuery.getUrl(query);
		var fravegaUrl = models.fravegaQuery.getUrl(query);
		var carrefourUrl = models.carrefourQuery.getUrl(query);
		var cotoUrl = models.cotoQuery.getUrl(query);
		var ribeiroUrl = models.ribeiroQuery.getUrl(query);
		var rodoUrl = models.rodoQuery.getUrl(query);

		var musimundoPromise = httpPromise.get(musimundoUrl).then(function (html) {
			var products = models.musimundo.mapToProducts(html);
			return products;
		});

		var fravegaPromise = httpPromise.get(fravegaUrl).then(function (html) {
			var products = models.fravega.mapToProducts(html);
			return products;
		});

		var carrefourPromise = httpPromise.get(carrefourUrl).then(function (html) {
			var products = models.carrefour.mapToProducts(html);
			return products;
		});

		var cotoPromise = httpPromise.get(cotoUrl).then(function (html) {
			var products = models.coto.mapToProducts(html);
			return products;
		});

		var ribeiroPromise = httpPromise.get(ribeiroUrl).then(function (html) {
			var products = models.ribeiro.mapToProducts(html);
			return products;
		});

		var rodoPromise = httpPromise.get(rodoUrl).then(function (html) {
			var products = models.rodo.mapToProducts(html);
			return products;
		});


		return Q.all([musimundoPromise, fravegaPromise, carrefourPromise, cotoPromise, ribeiroPromise, rodoPromise] );
	};
}

module.exports = Searcher;