var express = require('express');
var router = express.Router();

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('welcome');
	});

	app.use('/api', require('./routes'));

	app.use(function(req, res, next){
		req.status(404).json('not found');
		next();
	})
}