'use strict';

const app = require('angular').module('galleryApp');

app.controller('HomeController', function() {
  this.albums = require('../data/albums.js');
});
