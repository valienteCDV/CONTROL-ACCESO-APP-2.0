'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autorizacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Autorizacion.init({
    persona_id: DataTypes.INTEGER,
    area_id: DataTypes.INTEGER,
    fecha_desde: DataTypes.DATE,
    fecha_hasta: DataTypes.DATE,
    autorizado_por: DataTypes.INTEGER,
    fecha_autorizacion: DataTypes.DATE,
    activa: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Autorizacion',
  });
  return Autorizacion;
};