'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../../app/components/home')(testApp);
require('../../app/controllers')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should list albums', function() {
    let home = this.compile(require('./home-test.html'))(this.scope);
    this.scope.$digest();
    expect(home.find('h1').text()).toContain('Kittens');
    expect(home.find('h1').text()).toContain('Bunnies');
    expect(home.find('h1').text()).toContain('Puppies');
  });
});
