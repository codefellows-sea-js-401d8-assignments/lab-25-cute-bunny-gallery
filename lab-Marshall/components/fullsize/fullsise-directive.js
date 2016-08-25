'use strict';

module.exports = function(demoApp){
  demoApp.directive('mmmFullsizeDirective', function(){
    return {
      template: require('./fullsize.html'),
      controller: 'ImgController',
      controllerAs: 'fs',
      bindToController: true,
      scope: {
        url: '@',
        id: '@',
        description: '@'
      }
    };
  });
};
