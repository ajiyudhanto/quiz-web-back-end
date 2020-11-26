'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Multiple_Choice_Two_Answer_Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING
      },
      false_option_1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      false_option_2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correct_option_1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correct_option_2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      img_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Multiple_Choice_Two_Answer_Questions');
  }
};