'use strict';

const angular = require('angular');
const testApp = angular.module('testApp', []);

require('../app/component/cinemagraph-gallery')(testApp);
require('../app/component/cinemagraph-text')(testApp);
require('../app/component/cinemagraph-thumbnail')(testApp);
require('../app/component/cinemagraph-fullsize')(testApp);

describe('Cinemagraph gallery with sub-components', function() {
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($rootScope, $compile) {
    this.compile = $compile;
    this.scope = $rootScope.$new();
  }));

  it('Initial app state', function() {

    let testCinemagraphGallery = this.compile(require('./cinemagraph-gallery-test.html'))(this.scope);
    this.scope.$digest();

    // select albums list initial state
    expect(testCinemagraphGallery.find('option').length).toBe(3);
    expect(testCinemagraphGallery.find('option')[0].label).toBe('album 01');
    expect(testCinemagraphGallery.find('option')[0].selected).toBe(true);

    // text section state
    expect(angular.element(testCinemagraphGallery.find('section')[0]).hasClass('text-section')).toBe(true);
    expect(testCinemagraphGallery.find('li').length).toBe(3);
    expect(angular.element(testCinemagraphGallery.find('li')[0]).prop('title')).toBe('Pierrot le fou'); expect(angular.element(testCinemagraphGallery.find('li')[1]).prop('title')).toBe('Lawless');
    expect(angular.element(testCinemagraphGallery.find('li')[2]).prop('title')).toBe('The Man Who Fell to Earth');

    // toggle display button
    expect(testCinemagraphGallery.find('button').text()).toBe('show thumbnails');
  });

  it('Toggle to thumbnails display', function() {

    let testCinemagraphGallery = this.compile(require('./cinemagraph-gallery-test.html'))(this.scope);
    this.scope.$digest();

    testCinemagraphGallery.find('button')[0].click();

    testCinemagraphGallery.triggerHandler('input');

    expect(angular.element(testCinemagraphGallery.find('section')[0]).hasClass('thumbnail-section')).toBe(true);
    expect(testCinemagraphGallery.find('img').length).toBe(3);
    expect(angular.element(testCinemagraphGallery.find('img')[0]).prop('title')).toBe('Pierrot le fou'); expect(angular.element(testCinemagraphGallery.find('img')[1]).prop('title')).toBe('Lawless');
    expect(angular.element(testCinemagraphGallery.find('img')[2]).prop('title')).toBe('The Man Who Fell to Earth');
    expect(testCinemagraphGallery.find('button').text()).toBe('show list');

  });

  it('Click on text row to show fullsize', function() {

    let testCinemagraphGallery = this.compile(require('./cinemagraph-gallery-test.html'))(this.scope);
    this.scope.$digest();

    testCinemagraphGallery.find('li')[0].click();

    expect(angular.element(testCinemagraphGallery.find('img')[0]).hasClass('fullsize-image')).toBe(true);
    expect(angular.element(testCinemagraphGallery.find('img')[0]).prop('alt')).toBe('Pierrot le fou');

    testCinemagraphGallery.find('button')[0].click(); // x out button
    testCinemagraphGallery.find('li')[1].click();

    testCinemagraphGallery.triggerHandler('input');

    expect(angular.element(testCinemagraphGallery.find('img')[0]).prop('alt')).toBe('Lawless');

    testCinemagraphGallery.find('button')[0].click();
    testCinemagraphGallery.find('li')[2].click();

    testCinemagraphGallery.triggerHandler('input');

    expect(angular.element(testCinemagraphGallery.find('img')[0]).prop('alt')).toBe('The Man Who Fell to Earth');

    testCinemagraphGallery.find('button')[0].click();
  });

});
