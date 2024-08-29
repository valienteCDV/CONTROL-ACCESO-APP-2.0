// backend/src/models/Autorizacion.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Autorizacion extends Model {
    static associate(models) {
      Autorizacion.belongsTo(models.Persona, { foreignKey: 'persona_id' });
      Autorizacion.belongsTo(models.Area, { foreignKey: 'area_id' });
      Autorizacion.belongsTo(models.Usuario, { foreignKey: 'autorizado_por', as: 'autorizador' });
    }
  }
  
  Autorizacion.init({
    fecha_desde: DataTypes.DATE,
    fecha_hasta: DataTypes.DATE,
    fecha_autorizacion: DataTypes.DATE,
    activa: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Autorizacion',
  });
  
  return Autorizacion;
};