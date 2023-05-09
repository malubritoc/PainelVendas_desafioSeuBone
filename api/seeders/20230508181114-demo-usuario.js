'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [{
      nome_completo: "Maria Julia",
      login: "maju",
      senha: "4321",
      email: "maju@seubone.com",
      telefone: "87654321",
      estado: "pe",
      cidade: "recife",
      link_foto_perfil: "facebook.com",
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      nome_completo: "João Silva",
      login: "josi",
      senha: "2468",
      email: "josi@seubone.com",
      telefone: "44444444",
      estado: "sp",
      cidade: "sao paulo",
      link_foto_perfil: "twitter.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_completo: "Maria Fernanda",
      login: "mafe",
      senha: "0000",
      email: "mafe@seubone.com",
      telefone: "99999999",
      estado: "rn",
      cidade: "natal",
      link_foto_perfil: "apple.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
