'use strict';

const angular = require('angular');
let testApp = angular.module('testApp');
require('../../app/components/home')(testApp);
require('../../app/controllers')(testApp);

describe('home component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('should list galleries', function() {
    let home = this.compile(require('./home-test.html'))(this.scope);
    this.scope.$digest();
    expect(home.find('h1').text()).toContain('Kittens');
    expect(home.find('h1').text()).toContain('Puppies');
    expect(home.find('h1').text()).toContain('Bunnies');
    expect(home.find('h2').text()).toContain('Cute kitten pics');
    expect(home.find('h2').text()).toContain('Cute puppy pics');
    expect(home.find('h2').text()).toContain('Cute bunny pics');
    expect(angular.element(home.find('img')[0]).attr('src')).toBe('https://s-media-cache-ak0.pinimg.com/564x/18/1b/f3/181bf3cd12c1a8b316da51ca3c39a0f6.jpg');
    expect(angular.element(home.find('img')[1]).attr('src')).toBe('https://s-media-cache-ak0.pinimg.com/564x/14/6d/92/146d92eeb7a88aa951eee1a664daff77.jpg');
    expect(angular.element(home.find('img')[2]).attr('src')).toBe('https://pbs.twimg.com/profile_images/497043545505947648/ESngUXG0_400x400.jpeg');
  });
});
