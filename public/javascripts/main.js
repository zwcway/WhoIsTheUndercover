/**
 * Created by zwcway on 2015/4/20.
 */
"use strict";

requirejs.config({
  baseUrl: '/',
  paths: {
    'socket-io': 'socket.io/socket.io',
    "angular": 'lib/angular/angular',
    "angular-route": 'lib/angular-route/angular-route',
    "angular-resource": 'lib/angular-resource/angular-resource',
    "angular-animate": 'lib/angular-animate/angular-animate',

    'gamesApp': 'javascripts/games',
    'Connection': 'javascripts/connection',

    'undercover': 'games/controllers/undercover',
    'app-config': 'games/config'
  },
  shim: {
    'angular': {'export': 'angular'},
    'angular-route': ['angular'],
    'angular-resource': ['angular'],
    'angular-animate': ['angular']
  },
  priority: [
    "angular"
  ]
});

requirejs([
  'gamesApp'
], function () {
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  //angular.element().ready(function () {
    // bootstrap the app manually
    angular.bootstrap(document, ['games']);
  //});

  $('#site-loading').fadeOut();
});