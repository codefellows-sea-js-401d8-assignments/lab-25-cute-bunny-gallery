'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/gallery')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope, $routeParams) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.galleryId = 1;
  }));

  it('should display gallery', function() {
    let gallery = this.compile(require('./gallery-test.html'))(this.scope);
    this.scope.$digest();
    let ctrl = gallery.isolateScope().ctrl;
    expect(ctrl.getGalleryId()).toBe(1);
    expect(gallery.find('h1').text()).toBe('');
  });
});
