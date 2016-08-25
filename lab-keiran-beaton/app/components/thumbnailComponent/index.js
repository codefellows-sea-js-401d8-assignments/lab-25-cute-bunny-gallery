'use strict';

module.exports = function(app) {
  require('./thumbnailDirectiveCtrl')(app);
  require('./thumbnailDirective')(app);
};
