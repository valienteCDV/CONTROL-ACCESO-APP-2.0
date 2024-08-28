'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Autorizacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      persona_id: {
        type: Sequelize.INTEGER
      },
      area_id: {
        type: Sequelize.INTEGER
      },
      fecha_desde: {
        type: Sequelize.DATE
      },
      fecha_hasta: {
        type: Sequelize.DATE
      },
      autorizado_por: {
        type: Sequelize.INTEGER
      },
      fecha_autorizacion: {
        type: Sequelize.DATE
      },
      activa: {
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
    await queryInterface.dropTable('Autorizacions');
  }
};