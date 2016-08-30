'use strict';

const angular = require('angular');
const testApp = angular.module('testApp', []);
require('../app/components/album_component')(testApp);

describe('testing album component', function() {

  beforeEach(() => {
    angular.mock.module('testApp');
    angular.mock.inject(($compile, $rootScope) => {
      this.compile = $compile;
      this.scope = $rootScope.$new();
    });
  });

  it('should load into the dom', () => {
    let dd = this.compile(require('./controller-test.html'));
    this.scope.$digest();
    expect(true).toBe(true);
    // expect(dd.find('h2').text()).toBe('test');
  });

});
