'use strict';

module.exports = function(app) {
  require('./thumbnail_component')(app);
  require('./album_directive_ctrl')(app);
  require('./album_directive')(app);
};
