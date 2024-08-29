// backend/src/models/Area.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Area extends Model {
    static associate(models) {
      Area.belongsTo(models.Instalacion, { foreignKey: 'instalacion_id' });
      Area.hasMany(models.Autorizacion, { foreignKey: 'area_id' });
      Area.hasMany(models.Registro, { foreignKey: 'area_id' });
    }
  }
  
  Area.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: DataTypes.TEXT,
    es_zona_peligrosa: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Area',
  });
  
  return Area;
};