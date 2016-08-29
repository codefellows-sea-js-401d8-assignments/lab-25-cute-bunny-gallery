' use strict';

module.exports = function(demoApp){
  demoApp.directive('mmmHomeDirective', function(){
    return {
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'hc',
      bindToController: true,
      scope: {
        id: '@',
        url: '@',
        description: '@'
      }
    };
  });
};
