'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('lab25', [angular_route]);

require('./controller')(app);
require('./components')(app);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      templateUrl: '/app/components/home/home.html',
      controller: 'ImageController',
      controllerAs: 'hc'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

// angular components
