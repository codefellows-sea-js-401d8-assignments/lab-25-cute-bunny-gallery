'use strict';

module.exports = function($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('../html/home.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .when('/albums', {
      template: require('../html/albums.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    // .when('/albums/:album_id', {
    //   template: require('../html/villains.html'),
    //   controller: 'ImageController',
    //   controllerAs: 'ic'
    // })
    .when('/fullsize/:id', {
      template: require('../html/fullsize.html'),
      controller: 'ImageController',
      controllerAs: 'ic'
    })
    .otherwise({
      redirectTo: '/'
    });
};
