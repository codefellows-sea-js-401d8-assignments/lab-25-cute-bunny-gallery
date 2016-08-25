'use strict';

module.exports = function(demoApp){
  demoApp.controller('ImgController', ['$routeParams', '$location', function($routeParams, $location){

    this.images = [
      require('../data/image-set-one'),
      require('../data/image-set-two'),
      require('../data/image-set-three')
    ];

    this.isValidId = function(id){
      if (isNaN(id)) return false;
      if (!isFinite(id)) return false;
      if (id < 1) return false;
      if (typeof(this.images[id - 1]) === 'undefined') return false;
      return true;
    };

    let id = Number.parseInt($routeParams.id);

    if (!this.isValidId(id)){
      $location.path('/');
    }

    this.image = this.images[id - 1];
  }]);
};
