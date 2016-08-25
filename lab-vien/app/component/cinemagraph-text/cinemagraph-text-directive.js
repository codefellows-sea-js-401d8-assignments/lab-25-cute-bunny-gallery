'use strict';

module.exports = function(app) {
  app.directive('cinemagraphGalleryText', function() {
    return {
      restrict: 'EAC',
      template: require('./cinemagraph-text.html'),
      replace: true,
      controller: function() {},
      controllerAs: 'cinemagraphTextCtrl',
      bindToController: true,
      require: '^cinemagraphGallery',
      scope: {
        id: '@',
        title: '@',
        year: '@',
        imdb: '@',
        quote: '@'
      },
      link: function($scope, $elem, $attribute, $controller) { // controller is taken from the require above
        $scope.cinemagraphTextCtrl.changeFullsizeImage = $controller.changeFullsizeImage;
      }
    };
  });
};
