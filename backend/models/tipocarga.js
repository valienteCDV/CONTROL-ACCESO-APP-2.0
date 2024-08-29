// backend/src/models/TipoCarga.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class TipoCarga extends Model {
    static associate(models) {
      TipoCarga.hasMany(models.Carga, { foreignKey: 'tipo_carga_id' });
    }
  }
  
  TipoCarga.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    es_peligrosa: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    codigo_un: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoCarga',
  });
  
  return TipoCarga;
};