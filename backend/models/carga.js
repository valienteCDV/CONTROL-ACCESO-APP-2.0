'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carga.init({
    vehiculo_id: DataTypes.INTEGER,
    tipo_carga_id: DataTypes.INTEGER,
    cantidad: DataTypes.FLOAT,
    unidad_medida: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Carga',
  });
  return Carga;
};