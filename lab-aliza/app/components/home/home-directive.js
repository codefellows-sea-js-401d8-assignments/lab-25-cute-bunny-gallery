'use strict';

module.exports = function(app){
  app.directive('apHomeDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./home-template.html'),
      controller: 'HomeController',
      controllerAs: 'home',
      bindToController: true,
      scope: {}
    };
  });
};
