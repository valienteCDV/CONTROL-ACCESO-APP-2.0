// backend/src/models/Carga.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Carga extends Model {
    static associate(models) {
      Carga.belongsTo(models.Vehiculo, { foreignKey: 'vehiculo_id' });
      Carga.belongsTo(models.TipoCarga, { foreignKey: 'tipo_carga_id' });
    }
  }
  
  Carga.init({
    cantidad: DataTypes.FLOAT,
    unidad_medida: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Carga',
  });
  
  return Carga;
};