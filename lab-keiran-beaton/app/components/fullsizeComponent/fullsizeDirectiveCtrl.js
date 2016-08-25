'use strict';

module.exports = function(app) {
  app.controller('FullsizeDirectiveController', function() {
    this.id = 1;
    this.title = 'Shhhh';
    this.url = 'http://a.abcnews.com/images/Sports/espnapi_nba_a_stephenson_d1_576x324_wmain.jpg';
    this.description = 'Lance Stephenson silencing the haters';
  });
};
