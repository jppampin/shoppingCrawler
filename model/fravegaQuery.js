function FravegaQuery(){
	this.getUrl = function (query) {
		var baseUri = 'http://www.fravega.com/';

		return baseUri + encodeURIComponent(query);
	}
}

module.exports = FravegaQuery;