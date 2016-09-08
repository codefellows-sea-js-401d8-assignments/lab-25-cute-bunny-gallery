'use strict';

module.exports = function(app) {
  require('./image_controller')(app);
  console.log('is this working?');
};
