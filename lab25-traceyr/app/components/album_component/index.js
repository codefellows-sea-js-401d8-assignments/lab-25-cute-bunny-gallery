'use strict';

module.exports = function(app) {
  require('./album_directive_ctrl')(app);
  require('./album_directive')(app);
};
