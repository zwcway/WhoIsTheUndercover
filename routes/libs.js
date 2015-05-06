/**
 * Created by Administrator on 15/4/21.
 */

"use strict";

var path = require('path');
var libRegxp = /^\/lib\/([^/]+)\/(.+\/)?(.+\.(js|css))$/i;
var modules = 'angular,angular-route,angular-resource,angular-animate,angular-dragdrop,jquery,bootstrap'.split(',');

function libJS(req, res, next) {
  var paths = libRegxp.exec(req.baseUrl);
  var baseUrl = paths.shift();
  var extension = paths.pop();
  var module = paths.shift();
  var js = paths.pop();

  if (modules.indexOf(module) >= 0) {
    var options = {
      root: path.join(__dirname, '../node_modules')
    };
    return res.sendFile(path.join(module, paths.join('/'), js), options, function (err) {
      if (err) {
        console.log(err);
        res.status(err.status).end();
      }
    });
  }
  return next();
}

module.exports = libJS;

