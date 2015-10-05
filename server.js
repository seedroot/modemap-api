var express = require('express');
var app = module.exports = express();
var router = express.Router();
var cntrl = require('./controller.js');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, aziz');
	next();
});

require('./routes')(app);

/*app.get('/', function(req, res) {
	res.send(cntrl.getName().lastName);
});*/

app.listen(3000);