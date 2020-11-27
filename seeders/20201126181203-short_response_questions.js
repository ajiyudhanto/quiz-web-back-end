'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Short_Response_Questions', [
      {
        question: 'Apa nama ibukota Indonesia?',
        answer: 'Jakarta',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Apa nama ibukota Provinsi Jawa Timur?',
        answer: 'Surabaya',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Berada di kota manakah Ir. Soekarno dimakamkan?',
        answer: 'Blitar',
        img_url: '',
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
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Di kota manakah Tugu 0 km Indonesia berada?',
        answer: 'Sabang',
        img_url: 'https://yukpigi.com/wp-content/uploads/2019/11/nol.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Dimanakah ibukota Negara Spanyol?',
        answer: 'Madrid',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Short_Response_Questions', null, {});
  }
};
