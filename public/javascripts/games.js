/**
 * Created by Administrator on 15/4/20.
 */

angular.module("games.controllers", []);


angular.module("games", [
  "ngRoute", "ngResource", "ngAnimate",
  /*"infinite-scroll", "games.filters",*/
  "games.services", /*"games.directives", */"games.controllers"
]).config([
  "$routeProvider", "$locationProvider", "$interpolateProvider", "$compileProvider",
  function ($routeProvider, $locationProvider, $interpolateProvider, $compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    $interpolateProvider.startSymbol("[[").endSymbol("]]");
    $locationProvider.html5Mode(!0);

    $routeProvider.when("/home", {
      templateUrl: "/msite/html/home_city.html",
      controller: "homeCtrl"
    });
    $routeProvider.otherwise({redirectTo: "/404"});
  }
]);
