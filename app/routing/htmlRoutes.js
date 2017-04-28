
var path = require('path')

module.exports = function(app) {

	


	//match /survey path to survey.html
	app.get('/survey', function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	//match / unspecified uri  to home.html
	app.use('/',
	 function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}