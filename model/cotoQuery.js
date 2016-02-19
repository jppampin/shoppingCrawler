function CotoQuery(){
	this.getUrl = function (query) {
		var baseUri = 'http://www.cotodigital3.com.ar/sitios/cdigi/browse?Ntt=';

		return baseUri + encodeURIComponent(query);
	}
}

module.exports = CotoQuery;