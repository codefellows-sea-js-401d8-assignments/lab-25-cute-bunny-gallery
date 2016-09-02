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
    expect(gallery.find('h2').text()).toBe('Cute bunny giphys');
    expect(gallery.find('img').attr('src')).toBe('https://media.giphy.com/media/xT4uQDxVreP0zx5O92/giphy.gif');
    expect(gallery.find('p').text()).toContain('Sniff sniff.');
    expect(gallery.find('h3').text()).toContain('I smell you');
  });
});
