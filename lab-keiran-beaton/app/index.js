'use strict';

require('!!file?name=[name].[ext]!./html/index.html');

const angular = require('angular');
const galleryApp = angular.module('galleryApp', [require('angular-route')]);

require('./controllers');
require('./components');

galleryApp.config(['$routeProvider', function($route) {
  $route
  .when('/home', {
    template: require('./html/home.html'),
    controller: 'ImageController',
    controllerAs: 'ic'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);
