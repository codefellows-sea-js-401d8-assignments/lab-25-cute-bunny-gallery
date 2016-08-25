'use strict';

module.exports = function(app) {
  app.directive('cinemagraphGalleryFullsize', function() {
    return {
      restrict: 'EAC',
      template: require('./cinemagraph-fullsize.html'),
      replace: true,
      scope: {
        title: '@',
        year: '@',
        imdb: '@',
        quote: '@',
        image: '@'
      }
    };
  });
};
