'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Area.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    instalacion_id: DataTypes.INTEGER,
    es_zona_peligrosa: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Area',
  });
  return Area;
};