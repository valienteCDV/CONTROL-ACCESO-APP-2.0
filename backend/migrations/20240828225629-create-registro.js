'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persona_id: {
        type: Sequelize.INTEGER
      },
      vehiculo_id: {
        type: Sequelize.INTEGER
      },
      area_id: {
        type: Sequelize.INTEGER
      },
      tipo_acceso_id: {
        type: Sequelize.INTEGER
      },
      fecha_hora_entrada: {
        type: Sequelize.DATE
      },
      fecha_hora_salida: {
        type: Sequelize.DATE
      },
      registrado_por: {
        type: Sequelize.INTEGER
      },
      observaciones: {
        type: Sequelize.TEXT
      },
      es_entrada: {
        type: Sequelize.BOOLEAN
      },
      foto_entrada_url: {
        type: Sequelize.STRING
      },
      foto_salida_url: {
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
    await queryInterface.dropTable('Registros');
  }
};