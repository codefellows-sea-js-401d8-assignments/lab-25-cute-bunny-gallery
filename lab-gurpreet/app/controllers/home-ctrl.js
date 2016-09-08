'use strict';

module.exports = function(app) {
  app.controller('HomeController', function() {
    let kittens = require('../../data/album-1');
    let bunnies = require('../../data/album-2');
    let puppies = require('../../data/album-3');

    this.albums = [kittens, bunnies, puppies];
  });
};
