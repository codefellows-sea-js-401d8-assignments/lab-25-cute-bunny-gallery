module.exports = function(app) {
  require('./main')(app);
  require('./cinemagraph-gallery')(app);
  require('./cinemagraph-text')(app);
  require('./cinemagraph-thumbnail')(app);
  require('./cinemagraph-fullsize')(app);
};
