'use strict';

module.exports = function(app) {
  app.directive('dsTextDirective', function() {
    return {
      template: require('./text_component.html'),
      controller: 'TextComponentController',
      controllerAs: 'textCtrl',
      bindToController: true,
      scope: {
        description: '@',
        url: '@',
        name: '@',
        albumId: '@',
        id: '@'
      }
    };
  });
};
