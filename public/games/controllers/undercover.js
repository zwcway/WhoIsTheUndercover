/**
 * Created by Administrator on 15/4/20.
 */
define([
  'Connection'
], function (Connection) {
  "use strict";

  undercoverCtrl.$inject = ['$scope','$rootScope'];
  function undercoverCtrl($scope, $rootScope) {

    Connection.chat('hhk');
  }

  return undercoverCtrl;
});
