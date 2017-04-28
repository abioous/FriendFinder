var bodyParser = require('body-parser')
var express = require('express')
var path = require('path')
var app = express()

//port
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json());



//load api routing function
var apiRouter = require('./app/routing/apiRoutes.js');
apiRouter(app);


//load html routing function
var htmlRouter = require('./app/routing/htmlRoutes.js');
htmlRouter(app);


app.listen(PORT, function() {
	console.log("Started app on " + PORT)
})

