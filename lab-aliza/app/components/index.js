'use strict';

module.exports = function(app){
  require('./fullsize')(app);
  require('./thumbnail')(app);
  require('./home')(app);
};
