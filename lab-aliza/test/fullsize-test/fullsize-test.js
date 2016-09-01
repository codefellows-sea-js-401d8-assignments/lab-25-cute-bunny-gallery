'use strict';

const angular = require('angular');
let testApp = angular.module('testApp',[require('angular-route')]);

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
    let ctrl = fullsize.isolateScope().ctrl;
    expect(ctrl.getGalleryId()).toBe(1);
    expect(ctrl.getGiphyId()).toBe(1);
    expect(fullsize.find('h1').text()).toBe('');
  });
});
