'use strict';

module.exports = function(app) {
  app.controller('ImageController', function() {
    this.albums = [
      {
        albumId: 1,
        title: 'Pixar Villains',
        description: 'An album showcasing the people who should\'ve been cast in Suicide Squad.',
        url: 'villains',
        images: [
          {
            id: 1,
            album: 'villain',
            title: 'Syndrome',
            description: '1337 N3RD R463.',
            url: 'http://img.lum.dolimg.com/v1/images/image_7b7a8d9b.jpeg',
            showFullsize: false
          },
          {
            id: 2,
            album: 'villain',
            title: 'Lots\'O Huggin\'',
            description: 'Don\'t hug it out.',
            url: 'https://pbs.twimg.com/profile_images/1313971811/toy-story-3-lotso-bear_400x400.jpg',
            showFullsize: false
          },
          {
            id: 3,
            album: 'villain',
            title: 'Sid Phillips',
            description: 'This kid needs Jesus.',
            url: 'https://pbs.twimg.com/profile_images/471625645483495424/v-JTwotY_400x400.jpeg',
            showFullsize: false
          },
          {
            id: 4,
            album: 'villain',
            title: 'Lord Farquuad',
            description: 'The evilest (it\'s a word) of them all.',
            url: 'http://i1.kym-cdn.com/entries/icons/original/000/020/110/Dfdddddd.jpeg',
            showFullsize: false
          }
        ]
      },
      {
        albumId: 2,
        title: 'Pixar Heroes',
        description: 'When trouble comes your way, who you gonna call to save the day?',
        url: 'heroes',
        images: [
          {
            id: 1,
            album: 'heroes',
            title: 'Mr. Incredible',
            description: '1337 N3RD R463.',
            url: 'http://img.lum.dolimg.com/v1/images/image_7b7a8d9b.jpeg',
            showFullsize: false
          },
          {
            id: 2,
            album: 'heroes',
            title: 'Lots\'O Huggin\'',
            description: 'Don\'t hug it out.',
            url: 'https://pbs.twimg.com/profile_images/1313971811/toy-story-3-lotso-bear_400x400.jpg',
            showFullsize: false
          },
          {
            id: 3,
            album: 'heroes',
            title: 'Sid Phillips',
            description: 'This kid needs Jesus.',
            url: 'https://pbs.twimg.com/profile_images/471625645483495424/v-JTwotY_400x400.jpeg',
            showFullsize: false
          },
          {
            id: 4,
            album: 'heroes',
            title: 'Lord Farquuad',
            description: 'The evilest (it\'s a word) of them all.',
            url: 'http://i1.kym-cdn.com/entries/icons/original/000/020/110/Dfdddddd.jpeg',
            showFullsize: false
          }
        ]
      }
    ];
  });
};
