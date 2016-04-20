var User = require('../models/user');

var usersController = {
	
	getAllUsers: function (req, res) {
					User.findAll({
					 	where: {username: "superirale"}
					 }).then(function (users) {
				      res.json(users);
				    });
				}
}	

module.exports = usersController;