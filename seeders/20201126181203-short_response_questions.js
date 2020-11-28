'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Short_Response_Questions', [
      {
        question: 'Apa nama ibukota Indonesia?',
        answer: 'Jakarta',
        img_url: 'https://mmc.tirto.id/image/otf/500x0/2016/12/29/TIRTOID-antarafoto-wisata-monumen-nasional-291216-sgd-1_ratio-16x9.JPG',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Apa nama ibukota Provinsi Jawa Timur?',
        answer: 'Surabaya',
        img_url: 'https://img.okezone.com/content/2020/08/11/337/2260557/surabaya-masuk-zona-orange-padahal-kasus-covid-19-masih-tinggi-kok-bisa-K5SoBdVtgq.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Berada di kota manakah Ir. Soekarno dimakamkan?',
        answer: 'Blitar',
        img_url: 'https://img.gesuri.id/img/content/2019/06/20/39135/tahukah-anda-mengapa-makam-bung-karno-jadi-wisata-populer-LWCCTQKp9W.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Ikon kota manakah monumen ini?',
        answer: 'Surabaya',
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gC3yW1rnd2JaGWqB-6dCTdBGoebqdra0b044RDvp2yYaQN3-HwP7jr0JJXD2ffKFD7idB2pglzy--yWD7dGOorGX3sMS9rU&usqp=CAU&ec=45732300',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Apakah nama kota paling timur yang ada di Indonesia?',
        answer: 'Merauke',
        img_url: 'https://papuansphoto.files.wordpress.com/2015/07/wpid-fb_img_1437559900279.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Di kota manakah Tugu Kilometer 0 Indonesia berada?',
        answer: 'Sabang',
        img_url: 'https://www.genpi.co/timthumb.php?src=http://fs.genpi.co/uploads/data/images/nol.jpg&w=820&a=br&zc=1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Dimanakah ibukota Negara Spanyol?',
        answer: 'Madrid',
        img_url: 'https://www.fundacioncarolina.es/wp-content/uploads/2018/03/Madrid_undia_1397223554.735.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Short_Response_Questions', null, {});
  }
};
