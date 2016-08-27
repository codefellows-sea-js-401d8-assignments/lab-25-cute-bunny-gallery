'use strict';

module.exports = function(app) {
  app.controller('AlbumDirectiveController', function(){
    console.log('Am I loaded?');
    console.log(this.album);
    console.log(this);
  });
};
