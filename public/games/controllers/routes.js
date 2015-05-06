/**
 * Created by Administrator on 15/5/6.
 */

define([], function () {
    "use strict";

    RoutesCtrl.$inject = ["$scope", "$routeParams", "RouteLoader"];

    function RoutesCtrl($scope, $routeParams, RouteLoader){
        $scope.getPage = function() {
            return RouteLoader.getThePage();
        };

        $scope.lastURL = function() {
            return RouteLoader.getLastURL();
        };

        //$scope.htmlReady();
    }

    return RoutesCtrl;
});