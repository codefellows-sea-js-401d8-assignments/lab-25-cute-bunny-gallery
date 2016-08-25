'use strict';

module.exports = function(app) {
  app.controller('CinemagraphGalleryController', [CinemagraphGalleryController]);
};

const album1 = require('../../data/album1');
const album2 = require('../../data/album2');
const album3 = require('../../data/album3');

function CinemagraphGalleryController() {
  this.albums = [album1, album2, album3];
  this.gallery = this.albums[0].cinemagraphs; // initial value
  this.fullsizeImage = this.gallery[0]; // initial value

  this.showList = true;
  this.showThumbnails = false;
  this.showFullsize = false;
  this.buttonText = 'show thumbnails';

  this.toggleDisplayMode = function() {
    if (this.showList) {
      this.showList = false;
      this.showThumbnails = true;
      this.buttonText = 'show list';

    } else {
      this.showList = true;
      this.showThumbnails = false;
      this.buttonText = 'show thumbnails';
    }
  };


  this.changeFullsizeImage = (index) => {
    this.fullsizeImage = this.gallery[index];
    this.showFullsize = true;
  };

  this.hideFullsizeImage = () => {
    this.showFullsize = false;
  };

  this.chooseAlbum = (album) => {
    this.gallery = album.cinemagraphs;
  };
}
