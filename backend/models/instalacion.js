'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instalacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Instalacion.init({
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    empresa_id: DataTypes.INTEGER,
    maneja_vehiculos: DataTypes.BOOLEAN,
    maneja_cargas_peligrosas: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Instalacion',
  });
  return Instalacion;
};