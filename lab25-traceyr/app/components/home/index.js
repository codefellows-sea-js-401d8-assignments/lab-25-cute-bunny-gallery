'use strict';

const angular = require('angular');
const lab25 = angular.module('lab25');

lab25.controller('HomeController', [function() {
  this.messages = ['hello', 'hello', 'hello'];
}]);
