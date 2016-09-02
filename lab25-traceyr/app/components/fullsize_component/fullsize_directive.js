'use strict';

module.exports = function(app) {
  app.directive('fullsizeDirective', function(){
    return {
      restrict: 'EAC',
      template: require('./fullsize_directive.html'),
      controller: 'FullsizeDirectiveController',
      controllerAs: 'fs',
      bindToController: true,
      scope: {
        images: '@'
      }
    };
  });
};
