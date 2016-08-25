'use strict';

module.exports = function(app){
  app.controller('ImageController', function() {
    this.imageGallery = require('../../data/images4.js');
    this.title = 'Image Gallery';
    this.description = 'A Gallery of images of Lance Stephenson';
    this.thumbnail = true;
  });
};
