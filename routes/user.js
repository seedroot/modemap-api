var user = require('./../controllers/user');

module.exports = function (app) {
	app.route('/user/:id')
		.get(user.get)
};