'use strict';

module.exports = function(app) {
  app.directive('kbFullsizeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./fullsizeDirective.html'),
      controller: 'FullsizeDirectiveController',
      controllerAs: 'fd',
      bindToController: true,
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
