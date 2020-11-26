'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drag_And_Drop_Answer_Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Drag_And_Drop_Answer_Question.init({
    question: DataTypes.STRING,
    draggable: DataTypes.STRING,
    answer: DataTypes.STRING,
    img_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Drag_And_Drop_Answer_Question',
  });
  return Drag_And_Drop_Answer_Question;
};