'use strict';

module.exports = function(app) {
  require('./image-controller1')(app);
  require('./full-controller')(app);
};
