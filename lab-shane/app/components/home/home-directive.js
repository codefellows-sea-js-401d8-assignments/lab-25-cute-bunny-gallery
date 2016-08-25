'use strict';

require('angular').module('galleryApp')
  .directive('homeView', function() {
    return {
      restrict: 'EA',
      template: require('./home-view.html'),
      controller: 'HomeController',
      controllerAs: 'home',
      bindToController: true,
      scope: {
        title: '@',
        description: '@',
        id: '@',
        thumb: '@'
      }
    };
  });
