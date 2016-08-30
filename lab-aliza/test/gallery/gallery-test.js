'use strict';

const angular = require('angular');
let testApp = angular.module('testApp', []);
require('../../app/components/gallery')(testApp);

describe('gallery component', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
    let kittens = require('../../data/album-1');
    let bunnies = require('../../data/album-2');
    let puppies = require('../../data/album-3');

    this.albums = [kittens, bunnies, puppies];
  }));

  it('should have three albums', function() {
    expect(this.albums.length).toBe(3);
  });
});
