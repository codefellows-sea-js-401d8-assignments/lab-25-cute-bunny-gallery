'use strict';

module.exports = function(app) {
  app.directive('apFullsizeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./fullsize-template.html'),
      controller: 'ImageController',
      controllerAs: 'fullsize',
      bindToController: true,
      scope: {}
    };
  });
};
