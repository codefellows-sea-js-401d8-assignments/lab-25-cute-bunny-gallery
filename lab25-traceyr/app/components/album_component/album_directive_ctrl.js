'use strict';

module.exports = function(app) {
  app.controller('AlbumDirectiveController', function() {
    this.showOne = true;
    this.showAlbumInfo = false;
    this.showAll = true;
    this.showOneImage = function(img){
      this.showAll = false;
    }
  });
};
