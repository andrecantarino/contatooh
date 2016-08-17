//config/express.js
var express = require('express'),
	load = require('express-load');

module.exports = function(){
	var app = express();

	//configuracao de ambiente
	app.set('port', 3000);

	//middleware
	app.use(express.static('./public'));
	load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

	// views
	app.set('view engine', 'ejs');
	app.set('views','./app/views');

	return app;
}