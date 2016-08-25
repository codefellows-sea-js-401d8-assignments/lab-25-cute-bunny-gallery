'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing galleryApp', function() {
  beforeEach(() => {
    angular.mock.module('galleryApp');
    angular.mock.inject(($controller) => {
      this.oneController = new $controller('TheOneControllerToRuleThemAll');
      this.oneController = new $controller('TheOneControllerToRuleThemAll');
      this.fullController = new $controller('FullController');
    });
  });

  it('home controller should create a list of links to images', () => {
    expect(this.oneController.images.length > 0).toEqual(true);
    expect(this.oneController.images.length).toEqual(8);
  });

  it('thumbnail controller should create a list of images', () =>{
    expect(this.oneController.images.length > 0).toEqual(true);
    expect(this.oneController.images.length).toEqual(8);
  });

  it('full controller should create a list of images', () =>{
    expect(this.fullController.images.length > 0).toEqual(true);
    expect(this.fullController.images.length).toEqual(8);
  });

});
