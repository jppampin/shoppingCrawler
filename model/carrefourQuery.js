var url = require('url');

function CarrefourQuery(){
	this.getUrl = function (query) {
		var baseUri = 'http://www.carrefour.com.ar/catalogsearch/result/?q=';

		return baseUri + encodeURIComponent(query);
	}
}

module.exports = CarrefourQuery;