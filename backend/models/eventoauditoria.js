'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventoAuditoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EventoAuditoria.init({
    usuario_id: DataTypes.INTEGER,
    tipo_evento: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha_hora: DataTypes.DATE,
    ip_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EventoAuditoria',
  });
  return EventoAuditoria;
};