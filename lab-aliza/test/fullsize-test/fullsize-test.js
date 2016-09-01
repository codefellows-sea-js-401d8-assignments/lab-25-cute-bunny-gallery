'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../../app/components/fullsize')(testApp);
require('../../app/controllers')(testApp);

describe('fullsize component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should list albums', function() {
    // let fullsize = this.compile(require('./fullsize-test.html'))(this.scope);
    // this.scope.$digest();
    // expect(fullsize.find('h1').text()).toContain('Kittens');
  });
});
