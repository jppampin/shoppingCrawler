const http = require('http');
const Q = require('q');
const url = require('url');

function HttpPromise(){
	this.get = function (uri) {
		var deferred = Q.defer();
		var options = {
		  host: 'localhost',
		  port: 3128,
		  path: uri,
		  headers: {
		    Host: url.parse(uri).host
		  }
		};
		
		http.get(options, function get_resolve(res) {
			var html = '';
			res.on('data', function onData(chunk) {
				html += chunk;
			});

			res.on('end', function onEnd(error) {
				if(error){
					deferred.reject(error);
				}

				deferred.resolve(html);
			});
		});

		return deferred.promise;
	}
	
};

module.exports = new HttpPromise();