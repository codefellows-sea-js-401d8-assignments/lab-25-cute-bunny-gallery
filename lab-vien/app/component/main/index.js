module.exports = function(app) {
  require('./main-controller')(app);
  require('./main-directive')(app);
};
