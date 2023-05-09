'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vendas', [
      {
        nome_empresa: 'Riachuelo',
        nome_cliente: 'Ana Beatriz',
        cnpj: '99999999/0001-2',
        telefone: '88888888',
        valor_total: '1050.40',
        valor_frete: '50',
        nome_produto: 'bone rosa',
        quantidade: '100',
        compensada: '3',
        usuarios_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {    
        nome_empresa: 'C&A',
        nome_cliente: 'Ana Clara',
        cnpj: '7777777/0001-4',
        telefone: '83747483',
        valor_total: '563',
        valor_frete: '30.5',
        nome_produto: 'bone amarelo',
        quantidade: '50',
        compensada: '5',
        usuarios_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_empresa: 'Renner',
        nome_cliente: 'Ana Rosa',
        cnpj: '222222/0001-0',
        telefone: '23772849',
        valor_total: '500',
        valor_frete: '12',
        nome_produto: 'bone verde',
        quantidade: '15',
        compensada: '11',
        usuarios_id: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vendas', null, {})
  }
};
