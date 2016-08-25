'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');


const angular = require('angular');
const angular_route = require('angular-route');

var app = angular.module('app', [angular_route]);
require('./components')(app);
require('./controllers')(app);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'ImageController',
      controllerAs: 'hd'
    })
    .when('/thumbnail', {
      template: require('./html/thumbnail.html'),
      controller: 'ImageController',
      controllerAs: 'tnd'
    })
    .when('/fullsize/:id', {
      template: require('./html/fullsize.html'),
      controller: 'ImageController',
      controllerAs: 'fsd'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
