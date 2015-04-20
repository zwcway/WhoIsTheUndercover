/**
 * Created by zwcway on 2015/4/20.
 */

define([], function () {
  "use strict";

  function rootCtrl($rootScope, $scope, $route, $location) {
    $rootScope.$on("$routeChangeStart", function () {
      $rootScope.loading = 1;
    });

  }

  rootCtrl.$inject = ["$rootScope", "$scope", "$route", "$location"];

  return rootCtrl;
});