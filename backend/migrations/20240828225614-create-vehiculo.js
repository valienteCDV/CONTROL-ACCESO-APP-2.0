'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patente: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      modelo: {
        type: Sequelize.STRING
      },
      persona_id: {
        type: Sequelize.INTEGER
      },
      sin_patente: {
        type: Sequelize.BOOLEAN
      },
      observaciones: {
        type: Sequelize.TEXT
      },
      es_activo: {
        type: Sequelize.BOOLEAN
      },
      foto_url: {
        type: Sequelize.STRING
      },
      es_vehiculo_peligroso: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Vehiculos');
  }
};