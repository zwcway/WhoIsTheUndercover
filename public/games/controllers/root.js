/**
 * Created by zwcway on 2015/4/20.
 */

define([], function () {
  "use strict";

  rootCtrl.$inject = ["$rootScope", "$scope", "$route", "$location"];
  /**
   *
   * @param {$rootScope.Scope} $rootScope
   * @param {$scope.Scope} $scope
   * @param {$route} $route
   * @param {$location} $location
   */
  function rootCtrl($rootScope, $scope, $route, $location) {
    $rootScope.$on("$routeChangeStart", function () {
      $rootScope.loading = 1;
    });
    $rootScope.$on("$routeChangeSuccess", function() {
      var b = !1;
      a.loading = 0;
    });
  }

  return rootCtrl;
});