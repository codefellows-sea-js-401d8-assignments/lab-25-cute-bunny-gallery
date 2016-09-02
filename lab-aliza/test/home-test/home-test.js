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
    expect(home.find('h2').text()).toContain('Cute kitten giphys');
    expect(home.find('h2').text()).toContain('Cute puppy giphys');
    expect(home.find('h2').text()).toContain('Cute bunny giphys');
    expect(home.find('img').attr('src')).toBe('https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif');
    expect(home.find('img').attr('src')).toBe('https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif');
    expect(home.find('img').attr('src')).toBe('https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif');
  });
});
