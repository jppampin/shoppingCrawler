const Q = require('q');
const fs = require('fs');
const fs_readDir = Q.denodeify(fs.readdir);
const path = require('path');

const model = {};

/// Loading modules
fs_readDir('.').then( (files) => {
	files
		.filter((file) => file !== "searcher.js" && file !== "httpPromise.js"  )
		.forEach( (file) => {
			const ModuleClass = require(file);
			models[path.basename(file)] = new ModuleClass();
		});
});



function Searcher(){
	this.providers = [];

	this.fetch = function(query){
		var products = [];

		return products;
	};
}

module.exports = Searcher;