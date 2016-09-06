'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$location', '$routeParams', function($location, $routeParams) {

    let kittens = require('../../data/album-1');
    let bunnies = require('../../data/album-2');
    let puppies = require('../../data/album-3');

    this.albums = [kittens, bunnies, puppies];

    this.list = false;
    this.thumbnail = false;

    let galleryId = Number.parseInt($routeParams.galleryId);
    this.gallery = galleryId;
    let imageId = Number.parseInt($routeParams.imageId);
    this.image = imageId;

    this.getGalleryId = function(galleryId) {
      if (isNaN(galleryId)) return false;
      if (!isFinite(galleryId)) return false;
      if (galleryId < 0) return false;
      if (typeof(this.albums[galleryId - 1]) === 'undefined') return false;
      return true;
    };

    this.getimageId = function(imageId) {
      if (isNaN(imageId)) return false;
      if (!isFinite(imageId)) return false;
      if (imageId < 0) return false;
      if (typeof(this.albums[galleryId - 1].images[imageId - 1]) === 'undefined') return false;
      return true;
    };

    this.getGallery = function() {
      this.gallery = this.albums[galleryId - 1];
    };

    this.getimage = function() {
      this.image = this.albums[galleryId - 1].images[imageId - 1];
    };

    this.getList = function() {
      this.list = true;
      this.thumbnail = false;
    };

    this.getThumbnail = function() {
      this.thumbnail = true;
      this.list = false;
    };

  }]);
};
