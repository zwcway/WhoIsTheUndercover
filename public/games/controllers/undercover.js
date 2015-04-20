/**
 * Created by Administrator on 15/4/20.
 */
define([], function () {
  "use strict";

  function undercoverCtrl($scope, $rootScope) {
    alert(1);
  }

  undercoverCtrl.$inject = ['$scope','$rootScope'];

  return undercoverCtrl;
});
