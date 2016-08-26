'use strict';

module.exports = function(app) {
  app.controller('AlbumController',['$routeParams', function($routeParams) {
    console.log('Activated the AlbumController');
    if (this.id !== $routeParams.album_id) return false;
    if(this.id === $routeParams.album_id) this.album.showAlbum = true;

    this.showThumbnail = function() {
      this.album.viewThumbnail = true;
      this.album.viewList = false;
    };

    this.showList = function() {
      this.album.viewThumbnail = false;
      this.album.viewList = true;
    };

    this.showFullsize = function() {
      this.album.viewThumbnail = false;
      this.album.viewList = false;
      this.album.images[$routeParams.image_id - 1].showFullsize = true;
    };
  }]);
};
