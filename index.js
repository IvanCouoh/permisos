
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usuariosRouter = require('./routes/usuarios');
var seccionesRouter = require('./routes/secciones');
var loginRouter = require('./routes/usuarios');
var flash = require('connect-flash');
var app = express();

const port = process.env.PORT || 3001;
app.listen(port);
console.log("Conectado en el puerto ", port);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Invocamos a bycryptjs
const bcrypt = require('bcryptjs');

app.use('/', loginRouter);
app.use('/usuarios', usuariosRouter)
app.use('/secciones', seccionesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
