function CompumundoQuery(){
	this.getUrl = function (query) {
		var baseUri = 'https://www.compumundo.com.ar/productos?q=';

		return baseUri + encodeURIComponent(query);
	}
}

module.exports = CompumundoQuery;