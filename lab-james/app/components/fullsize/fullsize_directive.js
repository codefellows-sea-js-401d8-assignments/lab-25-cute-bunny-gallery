'use strict';

module.exports = function(app) {
  app.directive('pixFullsizeDirective', function() {
    return {
      template: require('./fullsize_directive.html'),
      controller: 'FullsizeController',
      controllerAs: 'fsc',
      bindToController: true,
      scope: {
        id: '@',
        title: '@',
        description: '@',
        url: '@',
        showFullsize: '@'
      }
    };
  });
};
