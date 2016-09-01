'use strict';

const angular = require('angular');
const angularRoute = require('angular-route');
let testApp = angular.module('testApp', [angularRoute]);
require('../../app/components/gallery')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $routeParams, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    this.routeParams = $routeParams;
  }));

  it('should have three albums', function() {
  });
});
