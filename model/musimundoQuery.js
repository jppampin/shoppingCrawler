function MusimundoQuery(){
	this.getUrl = function (query) {
		var baseUri = 'http://www.musimundo.com/Busqueda?search=';

		return baseUri + encodeURIComponent(query);
	}
}

module.exports = MusimundoQuery;