'use strict';

module.exports = function(app) {
  app.controller('ThumbnailDirectiveController', function(){
    console.log('Is thumbnail loaded?');
    console.log(this);
  });
};
