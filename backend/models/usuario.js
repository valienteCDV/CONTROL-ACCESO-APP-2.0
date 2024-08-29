'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.Instalacion, {
        foreignKey: 'instalacion_id',
        as: 'instalacion'
      });
      Usuario.belongsToMany(models.Rol, {
        through: 'UsuarioRoles',
        as: 'roles',
        foreignKey: 'usuario_id'
      });
      Usuario.hasMany(models.Registro, {
        foreignKey: 'registrado_por',
        as: 'registros'
      });
      Usuario.hasMany(models.Autorizacion, {
        foreignKey: 'autorizado_por',
        as: 'autorizaciones_otorgadas'
      });
      Usuario.hasMany(models.EventoAuditoria, {
        foreignKey: 'usuario_id',
        as: 'eventos_auditoria'
      });
    }
  }
  Usuario.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    instalacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};