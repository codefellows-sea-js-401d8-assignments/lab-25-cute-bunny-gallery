'use strict';

require('angular').module('galleryApp')
  .directive('fullComponent', function() {
    return {
      restrict: 'EA',
      template: require('./full.html'),
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
