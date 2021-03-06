/**
 * Created by Administrator on 15/5/4.
 */

define([
], function () {
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
        var bildings = $scope.buildings = [];
        var unit = $scope.unit = 10;
        $scope.selectedBuilding = null;
        $scope.buildingCats = [
            {
                name: 'economy',
                title:'经济类设施',
                buildings: [
                    {
                        name: 'residence',
                        title:'民房',
                        area: 5,
                        size: 0
                    }
                ]
            },
            {
                name: 'defense',
                title: '防御类设施',
                buildings: [
                    {
                        name: 'sniper_tower',
                        title:'狙击塔',
                        area: 3,
                        size: 7
                    }
                ]
            }
        ];

        $scope.selectedCat = $scope.buildingCats[0];

        $scope.building_click = function($event, building) {
            if ($scope.selectedBuilding === building) {
                $scope.selectedBuilding = null;
            } else {
                $scope.selectedBuilding = building;
            }
        };
        $scope.cat_click = function($event, cat) {
            $scope.selectedCat = cat;
        };
        $scope.add_building = function($event, building) {
            building.x = 0;
            building.y = 0;
            building.area = building.area || 0;
            building.areaRadius = (building.size + building.area) * unit;
            building.areaCenter = building.areaRadius / 2;
            $scope.buildings.push(building);
        };
    }

    return boomBeachCtrl;
});