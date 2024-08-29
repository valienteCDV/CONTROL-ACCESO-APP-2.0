// backend/src/models/Empresa.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Empresa extends Model {
    static associate(models) {
      Empresa.hasMany(models.Instalacion, { foreignKey: 'empresa_id' });
      Empresa.hasMany(models.Persona, { foreignKey: 'empresa_id' });
    }
  }
  
  Empresa.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  
  return Empresa;
};