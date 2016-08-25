'use strict';

require('angular').module('galleryApp')
  .directive('list', function() {
    return {
      restrict: 'EA',
      template: require('./list.html'),
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
