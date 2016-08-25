'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('galleryApp', [angular_route]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/album/:galleryId', {
      template: require('./html/album-view.html'),
      controller: 'AlbumController',
      controllerAs: 'album'
    })
    .when('/album/:galleryId/full/:fullId', {
      template: require('./html/full-view.html'),
      controller: 'AlbumController',
      controllerAs: 'album'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);


// controllers
require('./controllers/home-controller.js');
require('./controllers/album-controller.js');

// directives
require('./components/home/home-directive.js');
require('./components/album/album-directive.js');
require('./components/list/list-directive.js');
require('./components/thumb/thumb-directive.js');
require('./components/full/full-directive.js');

// html templates
require('./html/index.html');
require('./html/home.html');
require('./html/album-view.html');
require('./html/full-view.html');
