'use strict';

module.exports = function(app) {
  app.controller('LanceController', function() {
    this.showThumbnail = () => {
      this.imageGallery.thumbnail = true;
    };
    this.showTable = () => {
      this.imageGallery.thumbnail = false;
    };
  });
};
