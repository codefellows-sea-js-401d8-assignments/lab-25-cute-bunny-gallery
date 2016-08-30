'use strict';

module.exports = function(app) {
  require('./home-ctrl.js')(app);
  require('./images-ctrl.js')(app);
};
