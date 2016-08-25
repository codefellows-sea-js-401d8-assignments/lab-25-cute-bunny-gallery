'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$routeParams', '$location', function($routeParams) {

    let kittens = require('../../data/album-1');
    let bunnies = require('../../data/album-2');
    let puppies = require('../../data/album-3');

    this.images = [kittens, bunnies, puppies];

    // this.isValidId = function(id){
    //   if (isNaN(id)) return false;
    //   if (!isFinite(id)) return false;
    //   if (id < 1) return false;
    //   if (typeof(this.images[id - 1]) === 'undefined') return false;
    //   return true;
    // };

    let id = Number.parseInt($routeParams.id);

    // if (!this.isValidId(id)){
    //   $location.path('/');
    // }

    this.image = this.images[0].giphys[id - 1];
  }]);
};
