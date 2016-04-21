// server.js

// BASE SETUP
// =============================================================================
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.set('view engine', 'ejs'); // set up ejs for templating

var port = process.env.PORT || 8080;        // set our port


// ROUTES
// =============================================================================
var router = express.Router();              // get an instance of the express Router
//load routes
require('./app/routes.js')(router, passport); // load our routes and pass in our app and fully configured passport

// all of our routes will be prefixed with /
app.use('/', router);




// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);