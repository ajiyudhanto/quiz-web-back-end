'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Multiple_Choice_Single_Answer_Questions", [
      {
        question: 'Kota Ternate adalah kota yang berada di Provinsi...', 
        false_option_1: 'Aceh',
        false_option_2: 'Sulawesi Selatan',
        false_option_3: 'Sulawesi Tenggara',
        correct_option_1: 'Maluku Utara',
        img_url: 'https://cdn2.tstatic.net/manado/foto/bank/images/foto-kota-ternate-dan-panoramanya.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Kota yang dijuluki dengan Negeri 1001 Malam adalah Kota...', 
        false_option_1: 'Busan',
        false_option_2: 'Mekkah',
        false_option_3: 'Madinah',
        correct_option_1: 'Baghdad',
        img_url: 'https://majalahmissi.files.wordpress.com/2017/02/z_p26-did-u.jpg?w=676',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Kota Melayu Deli merupakan julukan dari Kota...', 
        false_option_1: 'Padang',
        false_option_2: 'Yogyakarta',
        false_option_3: 'Palembang',
        correct_option_1: 'Medan',
        img_url: 'https://eljohnnews.com/wp-content/uploads/2019/08/melayu-batam.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Berikut merupakan makanan khas padang, kecuali...', 
        false_option_1: 'Rendang',
        false_option_2: 'Sate Padang',
        false_option_3: 'Dendeng Batokok',
        correct_option_1: 'Bakso Padang',
        img_url: 'https://blog.airyrooms.com/wp-content/uploads/2018/10/3-01.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Ibukota Australia saat ini berada di Kota...', 
        false_option_1: 'Sydney',
        false_option_2: 'Melbourne',
        false_option_3: 'New York',
        correct_option_1: 'Canberra',
        img_url: 'https://u-gob.com/wp-content/uploads/2019/01/Australia-un-ejemplo-de-Transformaci%C3%B3n-Digital.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Candi Borobudur berada di Kota...', 
        false_option_1: 'Solo',
        false_option_2: 'Sleman',
        false_option_3: 'Yogyakarta',
        correct_option_1: 'Magelang',
        img_url: 'https://bob.kemenpar.go.id/wp-content/uploads/2019/10/candi-borobudur-harnasco.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Ibukota dari negara yang dijuluki dengan Negeri Gajah Putih adalah...', 
        false_option_1: 'Pattaya',
        false_option_2: 'Phuket',
        false_option_3: 'Phnom Penh',
        correct_option_1: 'Bangkok',
        img_url: 'https://rmol.id/images/berita/normal/2017/10/42647_02195720102017_foto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Multiple_Choice_Single_Answer_Questions", null, {});
  }
};
