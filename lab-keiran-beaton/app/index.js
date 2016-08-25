'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const galleryApp = angular.module('galleryApp', [require('angular-route')]);

require('./controllers')(galleryApp);
require('./components')(galleryApp);

galleryApp.config(['$routeProvider', function($route) {
  $route
  .when('/lance', {
    template: require('./html/lance.html'),
    controller: 'ImageController1',
    controllerAs: 'ic1'
  })
  .when('/full/:id', {
    template: require('./html/full.html'),
    controller: 'FullController',
    controllerAs: 'fc'
  })
  .otherwise({
    redirectTo: '/lance'
  });
}]);
