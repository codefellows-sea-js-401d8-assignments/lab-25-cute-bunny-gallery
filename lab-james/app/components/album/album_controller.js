'use strict';

module.exports = function(app) {
  app.controller('AlbumController',['$routeParams', function($routeParams) {
    let albumId = this.id;
    let paramsId = $routeParams.album_id;
    console.log('Activated the AlbumController');
    if (paramsId !== albumId) return false;
    if(albumId === paramsId) this.album.showAlbum = true;

    this.showThumbnail = function() {
      this.album.viewThumbnail = true;
      this.album.viewList = false;
    };

    this.showList = function() {
      this.album.viewThumbnail = false;
      this.album.viewList = true;
    };
  }]);
};
