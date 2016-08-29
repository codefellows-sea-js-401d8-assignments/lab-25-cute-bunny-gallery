'use strict';

module.exports = function(app) {
  app.directive('thumbnailDirective', function(){
    return {
      restrict: 'EAC',
      template: require('./thumbnail_directive.html'),
      controller: 'ThumbnailDirectiveController',
      controllerAs: 'td',
      bindToController: true,
      scope: {
        images: '@'
      }
    };
  });
};
