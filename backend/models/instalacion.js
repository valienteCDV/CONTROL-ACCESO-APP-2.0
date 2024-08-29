// backend/src/models/Instalacion.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Instalacion extends Model {
    static associate(models) {
      Instalacion.belongsTo(models.Empresa, { foreignKey: 'empresa_id' });
      Instalacion.hasMany(models.Area, { foreignKey: 'instalacion_id' });
      Instalacion.hasMany(models.Usuario, { foreignKey: 'instalacion_id' });
    }
  }
  
  Instalacion.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    maneja_vehiculos: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    maneja_cargas_peligrosas: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Instalacion',
  });
  
  return Instalacion;
};