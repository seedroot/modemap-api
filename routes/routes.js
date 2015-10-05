var express = require('express');
var router = express.Router();

router.route('/')
	.get(function(req, res) {
		res.send('Congratulations');
	});

require('./user')(router);

module.exports = router;