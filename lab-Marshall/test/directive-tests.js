'use strict';

const angular = require('angular');
const imageAlbum = require('./data/image-set-one');

const testApp = angular.module('testApp', []);

require('./components')(testApp);

describe('fullsize directive', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope){
    this.compile = $compile;
    this.scope = $rootScope.new();
  }));

  it('should show a fullsize image', function(){
    let dd = this.compile(require('./template.html'))(this.scope);
    this.scope.$digest();
    expect(dd.find('h2').text()).toBe('test');
  });
});

describe('thumbnail directive', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope){
    this.compile = $compile;
    this.scope = $rootScope.new();
  }));

  it('should show a thumbnails image', function(){

  })
});

describe('gallery directive', function(){
  beforeEach(angular.mock.module('testApp'));
  beforeEach(angular.mock.inject(function($compile, $rootScope){
    this.compile = $compile;
    this.scope = $rootScope.new();
    this.images = imageAlbum;
  }));

  it('should list galleries', function(){

  });
});
