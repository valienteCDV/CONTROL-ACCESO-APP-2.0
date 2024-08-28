'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      apellido: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING
      },
      empresa_id: {
        type: Sequelize.INTEGER
      },
      es_particular: {
        type: Sequelize.BOOLEAN
      },
      observaciones: {
        type: Sequelize.TEXT
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      sexo: {
        type: Sequelize.STRING
      },
      activo: {
        type: Sequelize.BOOLEAN
      },
      foto_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  }
};