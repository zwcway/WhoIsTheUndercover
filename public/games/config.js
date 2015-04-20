/**
 * Created by zwcway on 2015/4/20.
 */

define([], function () {
  "use strict";

  function config($routeProvider, $locationProvider, $interpolateProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    $interpolateProvider.startSymbol("[[").endSymbol("]]");
    $locationProvider.html5Mode(!0);

    $routeProvider.when("/", {
      templateUrl: "/templates/home_city.html",
      controller: "undercoverCtrl"
    });

    $routeProvider.when("/home", {
      templateUrl: "/templates/home_city.html",
      controller: "undercoverCtrl"
    });
    $routeProvider.otherwise({redirectTo: "/404"});
  }

  config.$inject = ["$routeProvider", "$locationProvider", "$interpolateProvider", "$compileProvider"];

  return config;
});