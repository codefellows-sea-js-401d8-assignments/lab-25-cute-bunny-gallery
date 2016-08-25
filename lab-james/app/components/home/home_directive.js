'use strict';

module.exports = function(app) {
  app.directive('pixHomeDirective', function() {
    return {
      template: require('./home-directive.html'),
      controller: 'HomeController',
      controllerAs: 'hc',
      bindToController: true,
      scope: {
        id: '@',
        title: '@',
        description: '@',
        url: '@'
      }
    };
  });
};
