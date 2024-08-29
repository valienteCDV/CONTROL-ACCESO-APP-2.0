'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vehiculo extends Model {
    static associate(models) {
      Vehiculo.belongsTo(models.Persona, {
        foreignKey: 'persona_id',
        as: 'propietario'
      });
      Vehiculo.hasMany(models.Registro, {
        foreignKey: 'vehiculo_id',
        as: 'registros'
      });
      Vehiculo.hasMany(models.Carga, {
        foreignKey: 'vehiculo_id',
        as: 'cargas'
      });
    }
  }
  Vehiculo.init({
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    persona_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sin_patente: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    observaciones: DataTypes.TEXT,
    es_activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    foto_url: DataTypes.STRING,
    es_vehiculo_peligroso: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Vehiculo',
  });
  return Vehiculo;
};