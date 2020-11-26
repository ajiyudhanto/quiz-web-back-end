'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Multiple_Choice_Two_Answer_Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Multiple_Choice_Two_Answer_Question.init({
    question: DataTypes.STRING,
    false_option_1: DataTypes.STRING,
    false_option_2: DataTypes.STRING,
    correct_option_1: DataTypes.STRING,
    correct_option_2: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Multiple_Choice_Two_Answer_Question',
  });
  return Multiple_Choice_Two_Answer_Question;
};