//Load Controllers
var UsersController = require('./controllers/usersController');

module.exports = function(router){

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.render('index.ejs');   
});
// more routes for our API will happen here

router.get('/user', UsersController.getAllUsers);

router.get('/login', function(req, res){
	res.render('login.ejs', { message: req.flash('loginMessage') }); 
});

router.get('/signup', function(req, res){
	res.render('signup.ejs', { message: req.flash('signUpMessage') }); 
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	    // if user is authenticated in the session, carry on 
	    if (req.isAuthenticated())
	        return next();

	    // if they aren't redirect them to the home page
	    res.redirect('/');
    }

}