'use strict';

module.exports = function(app) {
  app.directive('albumDirective', function(){
    return {
      restrict: 'EAC',
      template: require('./album_directive.html'),
      controller: 'AlbumDirectiveController',
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {
        title: '@',
        album: '='
      }
    };
  });
};
