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
      controller: 'HomeController'
    })
    .when('/gallery/:galleryId', {
      template: require('./html/gallery.html'),
      controller: 'ImageController'
    })
    .when('/gallery/:galleryId/fullsize/:imageId', {
      template: require('./html/fullsize.html'),
      controller: 'ImageController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
