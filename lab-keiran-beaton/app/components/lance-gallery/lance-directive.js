'use strict';

module.exports = function(app) {
  app.directive('kbLanceGallery', function() {
    return {
      controller: 'LanceController',
      controllerAs: 'lc',
      bindToController: true,
      template: require('./lance-directive.html'),
      scope: {
        title: '@',
        imageGallery: '@',
        description: '@'
      }
    };
  });
};
