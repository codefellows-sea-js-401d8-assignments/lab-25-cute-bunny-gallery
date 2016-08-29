'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const galleryApp = angular.module('galleryApp', [require('angular-route')]);

galleryApp.run(['$rootScope', function($rootScope){
  $rootScope.bunnies = require('./data/bunnies');
  $rootScope.boxers = require('./data/boxers');
  $rootScope.terriers = require('./data/terriers');
}]);

require('./controllers')(galleryApp);
require('./components')(galleryApp);

galleryApp.config(['$routeProvider', function($route){
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    });
}]);
