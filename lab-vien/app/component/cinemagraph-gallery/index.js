module.exports = function(app) {
  require('./cinemagraph-gallery-controller')(app);
  require('./cinemagraph-gallery-directive')(app);
};
