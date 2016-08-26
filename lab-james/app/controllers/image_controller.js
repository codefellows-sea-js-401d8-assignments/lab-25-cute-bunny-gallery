'use strict';

module.exports = function(app) {
  app.controller('ImageController', function() {
    this.albums = [
      {
        albumId: 1,
        title: 'Villains',
        description: 'Should\'ve been in Suicide Squad.',
        showAlbum: false,
        viewThumbnail: false,
        viewList: true,
        images: [
          {
            id: 1,
            albumId: 1,
            title: 'Syndrome',
            description: '1337 N3RD R463.',
            url: 'http://img.lum.dolimg.com/v1/images/image_7b7a8d9b.jpeg',
            showFullsize: false
          },
          {
            id: 2,
            albumId: 1,
            title: 'Lots\'O Huggin\'',
            description: 'Don\'t hug it out.',
            url: 'https://pbs.twimg.com/profile_images/1313971811/toy-story-3-lotso-bear_400x400.jpg',
            showFullsize: false
          },
          {
            id: 3,
            albumId: 1,
            title: 'Sid Phillips',
            description: 'This kid needs Jesus.',
            url: 'https://pbs.twimg.com/profile_images/471625645483495424/v-JTwotY_400x400.jpeg',
            showFullsize: false
          },
          {
            id: 4,
            albumId: 1,
            title: 'Lord Farquuad',
            description: 'The evilest (it\'s a word) of them all.',
            url: 'http://i1.kym-cdn.com/entries/icons/original/000/020/110/Dfdddddd.jpeg',
            showFullsize: false
          }
        ]
      },
      {
        albumId: 2,
        title: 'Heroes',
        description: 'Probably don\'t think they\'re heroes.',
        showAlbum: false,
        viewThumbnail: false,
        viewList: true,
        images: [
          {
            id: 1,
            albumId: 2,
            title: 'Mr. Incredible',
            description: 'World\'s greatest dad.',
            url: 'http://www.ipadforums.net/wallpapers/data/508/Mr_Incredible.png',
            showFullsize: false
          },
          {
            id: 2,
            albumId: 2,
            title: 'Wall-E',
            description: 'EeeeEEeeEEEeeEEva',
            url: 'http://blog.zoolert.com/wp-content/uploads/2015/08/LEGO-WALL-E-4-nwm.jpg',
            showFullsize: false
          },
          {
            id: 3,
            albumId: 2,
            title: 'Buzz Lightyear',
            description: 'To infinity...and beyond!',
            url: 'https://pbs.twimg.com/profile_images/703245394/buzz_400x400.png',
            showFullsize: false
          },
          {
            id: 4,
            albumId: 2,
            title: 'Rafiki',
            description: 'Best ever.',
            url: 'https://i.ytimg.com/vi/mjYGB4uYgWw/maxresdefault.jpg',
            showFullsize: false
          }
        ]
      }
    ];
  });
};
