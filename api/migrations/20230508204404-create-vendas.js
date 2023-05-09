'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_empresa: {
        type: Sequelize.STRING
      },
      nome_cliente: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      valor_total: {
        type: Sequelize.FLOAT
      },
      valor_frete: {
        type: Sequelize.FLOAT
      },
      nome_produto: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      compensada: {
        type: Sequelize.INTEGER
      },
      usuarios_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' }
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
    await queryInterface.dropTable('Vendas');
  }
};