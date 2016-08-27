'use strict';

module.exports = function(app) {
  app.directive('albumDirective', function(){
    return {
      restrict: 'EAC',
      template: require('./album_directive.html'),
      controller: 'AlbumDirectiveController',
      controllerAs: 'ad',
      bindToController: true,
      scope: {
        title: '@'
      }
    };
  });
};
