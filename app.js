var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var playasRouter = require('./routes/playas');
var especiesRouter = require('./routes/especies');
var brigadasRouter = require('./routes/brigadas');
var registrateRouter = require('./routes/registrate');
var loginRouter = require('./routes/login');
var registrobrigadaRouter = require('./routes/registro-brigada');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/playas', playasRouter);
app.use('/especies', especiesRouter);
app.use('/brigadas', brigadasRouter);
app.use('/registrate', registrateRouter);
app.use('/login', loginRouter);
app.use('/registro-brigada', registrobrigadaRouter);


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
