'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Documento.init({
    nombre: DataTypes.STRING,
    tipo: DataTypes.STRING,
    url: DataTypes.STRING,
    fecha_subida: DataTypes.DATE,
    subido_por: DataTypes.INTEGER,
    entidad_tipo: DataTypes.STRING,
    entidad_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Documento',
  });
  return Documento;
};