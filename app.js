require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');

require('./app_api/models/db');
require('./app_api/models/user'); // User model loaded before passport
require('./app_api/config/passport');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index');
var handlebars = require('hbs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
handlebars.registerPartials(__dirname + '/app_server/views/partials');
app.set('view engine', 'hbs');

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Create a specific CORS middleware for API routes
const apiCorsMiddleware = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  
  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
};



/// Apply the CORS middleware AND router together
app.use('/api', apiCorsMiddleware, apiRouter);



// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);

// JWT error handler - should go after routes
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({ message: err.message });
  }
  next(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
