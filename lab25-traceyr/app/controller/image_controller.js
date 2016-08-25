module.exports = function(app) {
  app.controller('ImageController', function(){
    this.albums = [{
      id: 1,
      title: 'Corgi Album',
      description: 'An album of argurably the cutests dogs ever',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvImmIxGEkp4Cs9zmXFWxQUbpjkXyAoy8h02p07cMr3sMhsrH',
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIY7ZUqKIzW5ISQ4EiAYCNgIcVnaoeYj5BRIEPtaHAVPfjFGBy',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2JpdXRjUSq2FPYvstqecIvrOHOmKVGEmUmqy2362Nrr9FbV-',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRa4N5QWH3ZxeHjZYt3RB7iWRj1GXRI_LQzTQf9CuspJx7Cfs_8UA'
      ],
      display: true
    }];
  });
};
