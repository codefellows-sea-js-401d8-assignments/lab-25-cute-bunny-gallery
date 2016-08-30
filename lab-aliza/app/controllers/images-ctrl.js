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

    this.galleryId = function(galleryId) {
      if (isNaN(galleryId)) return false;
      if (!isFinite(galleryId)) return false;
      if (galleryId < 0) return false;
      if (typeof(this.albums[galleryId - 1]) === 'undefined') return false;
      return true;
    };

    this.giphyId = function(giphyId) {
      if (isNaN(giphyId)) return false;
      if (!isFinite(giphyId)) return false;
      if (giphyId < 0) return false;
      if (typeof(this.albums[this.getGallery].giphys[giphyId - 1]) === 'undefined') return false;
      return true;
    };

    this.getGallery = function() {
      this.gallery = this.albums[galleryId - 1];
    };

    this.getGiphy = function(giphyId) {
      this.giphy = this.albums[this.galleryId].giphys[giphyId - 1];
    };

  }]);
};
