'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vehiculo.init({
    patente: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    persona_id: DataTypes.INTEGER,
    sin_patente: DataTypes.BOOLEAN,
    observaciones: DataTypes.TEXT,
    es_activo: DataTypes.BOOLEAN,
    foto_url: DataTypes.STRING,
    es_vehiculo_peligroso: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Vehiculo',
  });
  return Vehiculo;
};