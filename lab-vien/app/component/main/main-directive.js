'use strict';

module.exports = function(app) {
  app.directive('appMain', function() {
    return {
      restrict: 'EAC',
      controller: 'AppMainController',
      controllerAs: 'appMainCtrl',
      bindToController: true,
      template: require('./main.html'),
      replace: true, // replaces the element that this directive is declared on, in this case it's the div inside body of index.html
      scope: {}
    };
  });
};
