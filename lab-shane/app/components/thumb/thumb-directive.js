'use strict';

require('angular').module('galleryApp')
  .directive('thumb', function() {
    return {
      restrict: 'EA',
      template: require('./thumb.html'),
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
