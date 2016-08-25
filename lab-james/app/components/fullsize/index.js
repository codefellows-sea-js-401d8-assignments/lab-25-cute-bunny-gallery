'use strict';

module.exports = function(app) {
  require('./fullsize_directive')(app);
  require('./fullsize_directive_ctrl')(app);
};
