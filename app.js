var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * 从 node_module 中公开 js 插件文件
 */
var libRegxp = /^\/lib\/([^/]+)\/(.+\/)?(.+\.(js|css))$/i;
var modules = 'angular,angular-route,angular-resource,angular-animate,jquery,bootstrap'.split(',');

app.use(libRegxp, function (req, res, next) {
  var paths = libRegxp.exec(req.baseUrl);
  var baseUrl = paths.shift();
  var extension = paths.pop();
  var module = paths.shift();
  var js = paths.pop();

  if (modules.indexOf(module) >= 0) {
    var options = {
      root: path.join(__dirname, 'node_modules')
    };
    return res.sendFile(path.join(module, paths.join('/'), js), options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
    });
  }
  return next();
});

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
