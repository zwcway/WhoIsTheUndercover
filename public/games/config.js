/**
 * Created by zwcway on 2015/4/20.
 */

define([], function () {
  "use strict";

  config.$inject = ["$routeProvider", "$locationProvider", "$interpolateProvider", "$compileProvider"];
  function config($routeProvider, $locationProvider, $interpolateProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    $interpolateProvider.startSymbol("{{").endSymbol("}}");
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

/*
    $routeProvider.when("/:game", {
      templateUrl: "/undercover/history.htm",
      controller: function () {
          return './controllers/' + urlattr.name + '.js';
      }
    });
*/

    $routeProvider.when("/boombeach", {
      controller: "boombeachCtrl"
    });

    $routeProvider.when("/undercover", {
      templateUrl: "/templates/home_city.html",
      controller: "undercoverCtrl"
    });

    $routeProvider.when("/wap/404", {
      templateUrl: "/wap/html/base_404.html",
      controller: "nofoundCtrl"
    });

    $routeProvider.otherwise({redirectTo: "/404"});
  }

  return config;
});