'use strict';

module.exports = function(app) {
  app.controller('AlbumController',['$routeParams', function($routeParams) {
    console.log(this.album);
    let albumId = this.id;
    let paramsId = $routeParams.album_id;
    console.log('Activated the AlbumController');
    if (paramsId !== albumId) console.log('no match');
    if(albumId === paramsId) {
      console.log('match');
      this.album.showAlbum = true;
    }
  }]);
};
