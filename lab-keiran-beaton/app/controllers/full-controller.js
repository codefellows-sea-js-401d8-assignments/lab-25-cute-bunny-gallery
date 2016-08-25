'use strict';

module.exports = function(app) {
  app.controller('FullController', function($routeParams) {
    this.images = require('../data/images4.js');
    let id = Number.parseInt($routeParams.id);
    this.image = this.images[id -1];
  });
};
