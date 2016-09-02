'use strict';

module.exports = function(app){
  require('./fullsize')(app);
  require('./gallery')(app);
  require('./home')(app);
};
