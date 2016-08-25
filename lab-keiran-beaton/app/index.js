'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const imageApp = angular.module('imageApp', [require('angular-route')]);

require('./controllers')(imageApp);
require('./components')(imageApp);

imageApp.config(['$routeProvider', function($route) {
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
