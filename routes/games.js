/**
 * Created by Administrator on 15/4/21.
 */

"use strict";


var fs = require('fs');
var path = require('path');
var gameRegexp = /^\/(\w+)(\/.*)?$/i;
var tplExts = ['htm', 'html'];

/**
 *
 * @param req
 * @param res
 * @param next
 */
function games(req, res, next) {
  var routes = gameRegexp.exec(req.baseUrl);
  var baseUrl = routes.shift();
  var game = routes.shift();
  var pathUrl = routes.pop() || 'index.jade';

  var pathDir = path.dirname(pathUrl);
  var dir = path.join(__dirname, '../views', game);
  var filePath = path.join(dir, pathUrl);
  var ext = path.extname(filePath);
  var fileName = path.basename(pathUrl);
  var fileBase = fileName.substr(0, fileName.length - ext.length);
  var pathUrlFilePath = pathUrl.substr(0, pathUrl.length - ext.length);

  switch (ext) {
    case '.htm':
      // 存在 templates 目录中
      for (var i in tplExts) {
        var tpl = path.join(dir, 'templates', pathDir, fileBase + '.' + tplExts[i]);
        if (fs.existsSync(tpl) && fs.statSync(tpl).isFile()) {
          return res.sendFile(tpl);
        }
      }

    case '':
      filePath = path.join(dir, pathUrlFilePath + '.jade');
    case '.jade':
      // 直接渲染输出
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return res.render(filePath, {json: req.xhr});
      }
      break;
  }

  next();
}


module.exports = games;