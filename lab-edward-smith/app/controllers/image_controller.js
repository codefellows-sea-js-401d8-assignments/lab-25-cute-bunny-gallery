'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$rootScope', '$routeParams', function($rootScope, $rp){
    this.images = $rootScope.images;

    let location = $rp.id;

    this.list = false;

    this.getAlbum = function() {
      this.album = this.images[location]
      console.log(this.album)
    }


    this.getImage = function() {
      this.image = this.images[location].images[$rp.imageId-1]
      console.log(this.image)
    }

    this.toggle = function() {
      if (this.list) {
        return this.list = false;
      }
      this.list = true;
    };

  }]);
};
