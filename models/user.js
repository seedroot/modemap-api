exports.getUser = function (userID) {
	if(userID === '123')
		return 'user name is snow';
	else if(userID === '456')
		return 'user name is john';
	else
		return 'user not found'
}