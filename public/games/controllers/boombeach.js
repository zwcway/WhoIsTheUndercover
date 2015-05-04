/**
 * Created by Administrator on 15/5/4.
 */

define([], function () {
    "use strict";

    boomBeachCtrl.$inject = ["$rootScope", "$scope", "$route", "$location"];
    /**
     *
     * @param {$rootScope.Scope} $rootScope
     * @param {$scope.Scope} $scope
     * @param {$route} $route
     * @param {$location} $location
     */
    function boomBeachCtrl($rootScope, $scope, $route, $location) {
        $scope.buildingCats = [
            {
                name: 'economy',
                title:'经济类设施',
                buildings: [
                    {
                        name: 'residence',
                        title:'民房'
                    }
                ]
            },
            {
                name: 'defense',
                title: '防御类设施',
                buildings: [

                ]
            }
        ];

        $scope.selectedCat = $scope.buildingCats[0].name;
    }

    return boomBeachCtrl;
});