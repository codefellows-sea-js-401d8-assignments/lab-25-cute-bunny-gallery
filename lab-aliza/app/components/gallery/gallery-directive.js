'use strict';

require('angular').module('app')
  .directive('apGalleryDirective', function() {
    return {
      restrict: 'EA',
      template: require('./gallery-template.html'),
      controller: 'ImageController',
      controllerAs: 'gd',
      bindToController: true,
      scope: {
        galleryId: '@',
        label: '@',
        giphys: '@'
      }
    };
  });
