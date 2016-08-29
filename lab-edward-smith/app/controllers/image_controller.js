'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$rootScope', function($rootScope){
    this.bunnies = $rootScope.bunnies;
  }]);
};
