'use strict';

module.exports = function(app) {
  app.controller('AlbumController', function() {
    console.log('Activated the AlbumController');
    console.log(this.album);
  });
};
