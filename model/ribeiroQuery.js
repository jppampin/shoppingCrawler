function RibeiroQuery(){
	this.getUrl = function (query) {
		var baseUri = 'http://www.ribeiro.com.ar/ribeiro/basic/browse?Ntt=';

		return baseUri + encodeURIComponent(query);
	}
}

module.exports = RibeiroQuery;