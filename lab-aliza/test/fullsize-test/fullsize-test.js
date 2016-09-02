'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/fullsize')(testApp);

describe('fullsize component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope, $routeParams) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.galleryId = 1;
    $routeParams.giphyId = 1;
  }));

  it('should display fullsize info', function() {
    let fullsize = this.compile(require('./fullsize-test.html'))(this.scope);
    this.scope.$digest();
    expect(fullsize.find('h1').text()).toBe('Falling asleep');
    expect(fullsize.find('h2').text()).toBe('Description: So sleepy.');
    expect(fullsize.find('img').attr('src')).toBe('https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif');
  });
});
