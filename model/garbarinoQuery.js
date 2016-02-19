function GarbarinoQuery(){
	this.getUrl = function (query) {
		var baseUri = 'https://www.garbarino.com/productos?q=';

		return baseUri + encodeURIComponent(query);
	}
}

module.exports = GarbarinoQuery;