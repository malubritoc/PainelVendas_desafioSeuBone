'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendas.belongsTo(models.Usuarios, {
        foreignKey: 'usuarios_id'
      })
    }
  }
  Vendas.init({
    nome_empresa: DataTypes.STRING,
    nome_cliente: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    telefone: DataTypes.STRING,
    valor_total: DataTypes.FLOAT,
    valor_frete: DataTypes.FLOAT,
    nome_produto: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    compensada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vendas',
  });
  return Vendas;
};