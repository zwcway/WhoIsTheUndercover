/**
 * Created by Administrator on 15/4/20.
 */

define([
  'angular',
  'app-config',
  '../games/controllers/undercover',
  '../games/controllers/boombeach',
  '../games/controllers/root',
  'angular-route',
  'angular-resource',
  'angular-animate'
], function (angular, config, undercoverCtrl, boombeachCtrl, rootCtrl) {
  "use strict";

  angular = window.angular;

  angular.module('games.controllers', []);

  /**
   *
   * @type {angular.Module}
   */
  var app = angular.module("games", [
    "ngRoute", "ngResource", "ngAnimate",
    /*"infinite-scroll", "games.filters",
     "games.services", "games.directives", */"games.controllers"
  ]);

  app.config(config);

  app.controller('rootCtrl', rootCtrl);
  app.controller('undercoverCtrl', undercoverCtrl);
  app.controller('boombeachCtrl', boombeachCtrl);

  app.run(["$rootScope", function ($rootScope) {
    var b = document.domain;//.replace(/^(.+?\.)??(?=(test\.)?[^.]+\.\w+$)/, "");
    $rootScope.ROOTHOST = b;
    $rootScope.MOBILEHOST = "m." + b;
    $rootScope.RESTBASE = "/restapi/v1";
    $rootScope.PAYMENTBASE = "http://p." + b;
    $rootScope.ACCOUNTBASE = (/^ele(net)?\.me$/.test(b) ? "https" : "http") + "://account." + b;
    $rootScope.STATICBASE = "";
    $rootScope.MAINBASE = location.protocol + "//" + b + '/wap';
  }]);
});
