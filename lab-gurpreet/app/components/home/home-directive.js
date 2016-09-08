'use strict';

module.exports = function(app){
  app.directive('homeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./home-template.html'),
      controller: 'HomeController',
      controllerAs: 'home',
      bindToController: true,
      scope: {
        title: '@',
        description: '@',
        id: '@',
        url: '@'
      }
    };
  });
};
