// backend/src/models/TipoAcceso.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class TipoAcceso extends Model {
    static associate(models) {
      TipoAcceso.hasMany(models.Registro, { foreignKey: 'tipo_acceso_id' });
    }
  }
  
  TipoAcceso.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'TipoAcceso',
  });
  
  return TipoAcceso;
};