'use strict';

require('angular').module('galleryApp')
  .directive('albumShowcase', function() {
    return {
      restrict: 'EA',
      template: require('./album-showcase.html'),
      controller: 'AlbumController',
      controllerAs: 'album',
      bindToController: true,
      scope: {
        id: '@',
        name: '@',
        thumb: '@',
        pics: '@',
        description: '@'
      }
    };
  });
