'use strict';

module.exports = function(app) {
  require('./textDirectiveCtrl')(app);
  require('./textDirective')(app);
};
