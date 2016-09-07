'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');

require('../../app/components/gallery')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope, $routeParams) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    $routeParams.galleryId = 2;
  }));

  it('should display gallery', function() {
    let gallery = this.compile(require('./gallery-test.html'))(this.scope);
    this.scope.$digest();
    expect(gallery.find('h1').text()).toBe('Bunnies');
    expect(gallery.find('h2').text()).toBe('Cute bunny pics');
    expect(gallery.find('img').attr('src')).toBe('https://s-media-cache-ak0.pinimg.com/564x/14/6d/92/146d92eeb7a88aa951eee1a664daff77.jpg');
    expect(gallery.find('p').text()).toContain('love');
    expect(gallery.find('h3').text()).toContain('I am in love');
  });
});
