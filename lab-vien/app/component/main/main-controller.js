'use strict';

module.exports = function(app) {
  app.controller('AppMainController', AppMainController);
};

function AppMainController() {
  this.showList = true;
  this.showThumbnails = false;
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
}
