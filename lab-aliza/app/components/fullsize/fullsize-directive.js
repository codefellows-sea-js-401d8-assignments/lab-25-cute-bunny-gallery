'use strict';

module.exports = function(app) {
  app.directive('apFullsizeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./fullsize-template.html'),
      controller: 'ImageController',
      controllerAs: 'fsd',
      bindToController: true,
      scope: {
        title: '@',
        description: '@',
        url: '@'
      }
    };
  });
};
