function RodoQuery(){
	this.getUrl = function (query) {
		var baseUri = 'http://www.rodo.com.ar/catalogsearch/result/?q=';

		return baseUri + encodeURIComponent(query);
	}
}

module.exports = RodoQuery;