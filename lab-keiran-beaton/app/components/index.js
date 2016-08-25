'use strict';

module.exports = function(app) {
  require('./textComponent')(app);
  require('./thumbnailComponent')(app);
  require('./fullsizeComponent')(app);
};
