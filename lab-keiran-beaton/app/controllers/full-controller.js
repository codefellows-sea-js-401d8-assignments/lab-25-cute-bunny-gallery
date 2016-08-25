'use strict';

module.exports = function(app) {
  app.controller('FullController', function($routeParams) {
    this.images = [
      {
        id: 1,
        title: 'Shhhh',
        url: 'http://a.abcnews.com/images/Sports/espnapi_nba_a_stephenson_d1_576x324_wmain.jpg',
        description: 'Lance Stephenson silencing the haters'
      },
      {
        id: 2,
        title: 'Internet Famous',
        url: 'http://cdn2.business2community.com/wp-content/uploads/2014/05/lance-stephenson.jpg',
        description: 'Lance Stephenson blowing in Lebron\'s ear'
      },
      {
        id: 3,
        title: 'Brick',
        url: 'http://cdn.fansided.com/wp-content/blogs.dir/81/files/2015/06/lance-stephenson-nba-charlotte-hornets-san-antonio-spurs1.jpg',
        description: 'Lance Stephenson probably missing a jumper'
      },
      {
        id: 4,
        title: 'Looking for a Call',
        url: 'https://i.ytimg.com/vi/Wgu7iufAz9Q/maxresdefault.jpg',
        description: 'Lance Stephenson sleeping on the ground in the middle of an NBA game'
      },
      {
        id: '5',
        title: 'Boston',
        url: 'http://theledgesports.com/wp-content/uploads/2015/06/pierce.jpg',
        description: 'Paul Pierce Reppin for Boston'
      },
      {
        id: '6',
        title: 'Number One',
        url: 'http://www.interbasket.net/news/wp-content/uploads/paulpierce.jpeg',
        description: 'Paul Pierce Holding up one finger'
      },
      {
        id: '7',
        title: 'More Reppin',
        url: 'http://boston.sportsthenandnow.com/wp/wp-content/uploads/2011/08/paul_pierce_01.jpg',
        description: 'He does this kind of alot'
      },
      {
        id: '8',
        title: 'Have Some Al Harrington',
        url: 'http://www.rantsports.com/nba/files/2014/08/4.-Al-Harrington-Moment.jpg',
        description: 'That game winner where he talked shit to Al for the whole shot clock then iced the game in his eyeball'
      }
    ];

    let id = Number.parseInt($routeParams.id);
    this.image = this.images[id -1];
  });
};
