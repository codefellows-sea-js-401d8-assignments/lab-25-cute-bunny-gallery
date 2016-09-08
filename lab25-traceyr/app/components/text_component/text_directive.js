'use strict';

module.exports = function(app) {
  app.directive('textDirective', function(){
    return {
      restrict: 'EAC',
      template: require('./text_directive.html'),
      controller: 'TextDirectiveController',
      controllerAs: 'tx',
      bindToController: true,
      scope: {
        images: '@'
      }
    };
  });
};
