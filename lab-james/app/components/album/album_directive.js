'use strict';

module.exports = function(app) {
  app.directive('pixAlbumDirective', function() {
    return {
      template: require('./album_directive.html'),
      controller: 'AlbumController',
      controllerAs: 'ac',
      bindToController: true,
      scope: {
        id: '@',
        title: '@',
        description: '@',
        url: '@',
        images: '='
      }
    };
  });
};
