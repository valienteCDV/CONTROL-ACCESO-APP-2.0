// backend/src/models/Registro.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Registro extends Model {
    static associate(models) {
      Registro.belongsTo(models.Persona, { foreignKey: 'persona_id' });
      Registro.belongsTo(models.Vehiculo, { foreignKey: 'vehiculo_id' });
      Registro.belongsTo(models.Area, { foreignKey: 'area_id' });
      Registro.belongsTo(models.TipoAcceso, { foreignKey: 'tipo_acceso_id' });
      Registro.belongsTo(models.Usuario, { foreignKey: 'registrado_por', as: 'registrador' });
    }
  }
  
  Registro.init({
    fecha_hora_entrada: DataTypes.DATE,
    fecha_hora_salida: DataTypes.DATE,
    observaciones: DataTypes.TEXT,
    es_entrada: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    foto_entrada_url: DataTypes.STRING,
    foto_salida_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registro',
  });
  
  return Registro;
};