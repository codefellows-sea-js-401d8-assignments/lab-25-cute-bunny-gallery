'use strict';

module.exports = function(app){
  require('./album_component')(app);
  require('./thumbnail_component')(app);
  require('./text_component')(app);
};
