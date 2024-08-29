// backend/src/models/Persona.js
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Persona extends Model {
    static associate(models) {
      Persona.belongsTo(models.Empresa, { foreignKey: 'empresa_id' });
      Persona.hasMany(models.Vehiculo, { foreignKey: 'persona_id' });
      Persona.hasMany(models.Registro, { foreignKey: 'persona_id' });
      Persona.hasMany(models.Autorizacion, { foreignKey: 'persona_id' });
    }
  }
  
  Persona.init({
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    es_particular: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    observaciones: DataTypes.TEXT,
    fecha_nacimiento: DataTypes.DATE,
    sexo: DataTypes.CHAR(1),
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    foto_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  
  return Persona;
};