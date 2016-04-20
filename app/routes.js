//Load Controllers
var UsersController = require('./controllers/usersController');

module.exports = function(router){

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
// more routes for our API will happen here

router.get('/user', UsersController.getAllUsers);

}