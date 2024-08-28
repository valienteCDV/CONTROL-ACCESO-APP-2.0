'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registro.init({
    persona_id: DataTypes.INTEGER,
    vehiculo_id: DataTypes.INTEGER,
    area_id: DataTypes.INTEGER,
    tipo_acceso_id: DataTypes.INTEGER,
    fecha_hora_entrada: DataTypes.DATE,
    fecha_hora_salida: DataTypes.DATE,
    registrado_por: DataTypes.INTEGER,
    observaciones: DataTypes.TEXT,
    es_entrada: DataTypes.BOOLEAN,
    foto_entrada_url: DataTypes.STRING,
    foto_salida_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registro',
  });
  return Registro;
};