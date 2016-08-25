'use strict';

module.exports = function(app) {
  app.controller('FullsizeController',['$routeParams', function($routeParams) {
    console.log('Activated the FullsizeController');
    if ($routeParams.id === this.id) this.showFullsize = true;
  }]);
};
