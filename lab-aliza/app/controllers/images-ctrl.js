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
    let giphyId = Number.parseInt($routeParams.giphyId);
    this.giphy = giphyId;

    this.getGalleryId = function(galleryId) {
      if (isNaN(galleryId)) return false;
      if (!isFinite(galleryId)) return false;
      if (galleryId < 0) return false;
      if (typeof(this.albums[galleryId - 1]) === 'undefined') return false;
      return true;
    };

    this.getGiphyId = function(giphyId) {
      if (isNaN(giphyId)) return false;
      if (!isFinite(giphyId)) return false;
      if (giphyId < 0) return false;
      if (typeof(this.albums[galleryId - 1].giphys[giphyId - 1]) === 'undefined') return false;
      return true;
    };

    this.getGallery = function() {
      this.gallery = this.albums[galleryId - 1];
    };

    this.getGiphy = function() {
      this.giphy = this.albums[galleryId - 1].giphys[giphyId - 1];
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
