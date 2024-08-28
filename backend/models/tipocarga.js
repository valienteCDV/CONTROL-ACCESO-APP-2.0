'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoCarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TipoCarga.init({
    nombre: DataTypes.STRING,
    es_peligrosa: DataTypes.BOOLEAN,
    codigo_un: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoCarga',
  });
  return TipoCarga;
};