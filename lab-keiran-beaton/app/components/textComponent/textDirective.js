'use strict';

module.exports = function(app) {
  app.directive('kbTextDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./textDirective.html'),
      controller: 'TextDirectiveController',
      controllerAs: 'td',
      bindToController: true,
      scope: {
        title: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
