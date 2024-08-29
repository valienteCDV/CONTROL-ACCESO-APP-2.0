'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      Rol.belongsToMany(models.Usuario, {
        through: 'UsuarioRoles',
        as: 'usuarios',
        foreignKey: 'rol_id'
      });
      Rol.belongsToMany(models.Permiso, {
        through: 'RolPermisos',
        as: 'permisos',
        foreignKey: 'rol_id'
      });
    }
  }
  Rol.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};