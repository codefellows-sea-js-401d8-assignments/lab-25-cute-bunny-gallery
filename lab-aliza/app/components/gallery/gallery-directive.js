'use strict';

module.exports = function(app){
  app.directive('apGalleryDirective', function() {
    return {
      restrict: 'EAC',
      template: require('./gallery-template.html'),
      controller: 'ImageController',
      controllerAs: 'gallery',
      bindToController: true,
      scope: {}
    };
  });
};
