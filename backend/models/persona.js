'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Persona.init({
    apellido: DataTypes.STRING,
    nombre: DataTypes.STRING,
    dni: DataTypes.STRING,
    empresa_id: DataTypes.INTEGER,
    es_particular: DataTypes.BOOLEAN,
    observaciones: DataTypes.TEXT,
    fecha_nacimiento: DataTypes.DATE,
    sexo: DataTypes.STRING,
    activo: DataTypes.BOOLEAN,
    foto_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};