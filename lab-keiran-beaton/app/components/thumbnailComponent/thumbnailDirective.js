'use strict';

module.exports = function(app) {
  app.directive('kbThumbnailDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./thumbnailDirective.html'),
      controller: 'ThumbnailDirectiveController',
      controllerAs: 'thd',
      bindToController: true,
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
