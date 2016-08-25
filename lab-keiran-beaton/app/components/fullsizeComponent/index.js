'use strict';

module.exports = function(app) {
  require('./fullsizeDirectiveCtrl')(app);
  require('./fullsizeDirective')(app);
};
