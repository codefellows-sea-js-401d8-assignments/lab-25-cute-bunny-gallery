'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', [require('angular-route')]);
require('../../app/components/fullsize')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should have three albums', function() {
    this.scope.contents = this.albums;
    let fullsize = this.compile(require('./fullsize-test.html'))(this.scope);
    this.scope.$digest();

  });
});
