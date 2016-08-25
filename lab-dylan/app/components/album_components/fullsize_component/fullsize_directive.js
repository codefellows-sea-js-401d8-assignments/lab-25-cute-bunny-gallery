'use strict';

module.exports = function(app) {
  app.directive('dsFullsizeDirective', function() {
    return {
      template: require('./fullsize_component.html'),
      controller: 'FullsizeComponentController',
      controllerAs: 'fullsizeCtrl',
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
