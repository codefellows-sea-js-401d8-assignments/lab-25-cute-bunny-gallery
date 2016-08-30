'use strict';

module.exports = function(app) {
  app.controller('AlbumDirectiveController', function() {
    this.showOne = true;
    this.showAlbumInfo = false;
  });
};
