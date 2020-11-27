'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Multiple_Choice_Two_Answer_Questions", [
      {
        question: 'Di bawah ini yang merupakan makanan khas Jogja adalah...', 
        false_option_1: 'Sate',
        false_option_2: 'Bakso',
        correct_option_1: 'Gudeg',
        correct_option_2: 'Bakpia',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Berikut ini merupakan ibukota dari suatu negara, kecuali...', 
        false_option_1: 'Roma',
        false_option_2: 'Paris',
        correct_option_1: 'Shanghai',
        correct_option_2: 'Selangor',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Di bawah ini yang merupakan julukan dari Kota Bandung adalah...', 
        false_option_1: 'Venetië van Java',
        false_option_2: 'Kota Apel',
        correct_option_1: 'Paris van Java',
        correct_option_2: 'Kota Kembang',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Di bawah ini yang merupakan ibukota provinsi di Indonesia adalah...', 
        false_option_1: 'Wamena',
        false_option_2: 'Malang',
        correct_option_1: 'Manokwari',
        correct_option_2: 'Denpasar',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Berikut adalah nama-nama kota yang ada di Benua Eropa, kecuali...', 
        false_option_1: 'Milan',
        false_option_2: 'Madrid',
        correct_option_1: 'Ottawa',
        correct_option_2: 'Washington',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Di bawah ini yang merupakan kota yang berada di Provinsi Jawa Tengah adalah...', 
        false_option_1: 'Sleman',
        false_option_2: 'Pacitan',
        correct_option_1: 'Kudus',
        correct_option_2: 'Salatiga',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        question: 'Berikut adalah nama-nama kota yang ada di Pulau Kalimantan, kecuali...', 
        false_option_1: 'Palangkaraya',
        false_option_2: 'Pontianak',
        correct_option_1: 'Makassar',
        correct_option_2: 'Manado',
        img_url: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Multiple_Choice_Two_Answer_Questions", null, {});
  }
};
