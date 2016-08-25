'use strict';

module.exports = function(app) {
  app.controller('ImageController', ['$routeParams', '$location', function($routeParams, $location) {
    this.images = [{
      id: 1,
      url: 'https://media.giphy.com/media/emWySpOLFLUAM/giphy.gif',
      description: 'So sleepy.',
      title: 'Falling asleep'
    },
    {
      id: 2,
      url: 'https://media.giphy.com/media/OmK8lulOMQ9XO/giphy.gif',
      description: 'Gotta catch em all.',
      title: 'High tech'
    },
    {
      id: 3,
      url: 'https://media.giphy.com/media/brRWBSKoc9ueI/giphy.gif',
      description: 'Feels so good...',
      title: 'A nice massage'
    },
    {
      id: 4,
      url: 'https://media.giphy.com/media/3o6Ztj4ulu0hLoqyic/giphy.gif',
      description: 'I want to run!',
      title: 'Let out out'
    }];

    this.isValidId = function(id){
      if (isNaN(id)) return false;
      if (!isFinite(id)) return false;
      if (id < 1) return false;
      if (typeof(this.images[id - 1]) === 'undefined') return false;
      return true;
    };

    let id = Number.parseInt($routeParams.id);

    if (!this.isValidId(id)){
      $location.path('/');
    }
    this.image = this.images[id - 1];
  }]);
};
