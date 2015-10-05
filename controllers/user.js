var user = require('./../models/user');

exports.get = function (req, res) {
	//console.log(req);
	var id = req.params.id;
	res.status(200).json(user.getUser(id));
}