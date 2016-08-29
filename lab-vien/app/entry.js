'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./style/scss/main.scss');

// npm modules
const angular = require('angular');

// angular modules
var cinemagraphApp = angular.module('cinemagraphApp', []);

require('./component')(cinemagraphApp);
