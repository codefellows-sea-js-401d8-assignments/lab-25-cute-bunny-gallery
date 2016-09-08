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
    let picId = Number.parseInt($routeParams.picId);
    this.pic = picId;

    this.getGalleryId = function(galleryId) {
      if (isNaN(galleryId)) return false;
      if (!isFinite(galleryId)) return false;
      if (galleryId < 0) return false;
      if (typeof(this.albums[galleryId - 1]) === 'undefined') return false;
      return true;
    };

    this.getPicId = function(picId) {
      if (isNaN(picId)) return false;
      if (!isFinite(picId)) return false;
      if (picId < 0) return false;
      if (typeof(this.albums[galleryId - 1].pics[picId - 1]) === 'undefined') return false;
      return true;
    };

    this.getGallery = function() {
      this.gallery = this.albums[galleryId - 1];
    };

    this.getPic = function() {
      this.pic = this.albums[galleryId - 1].pics[picId - 1];
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
