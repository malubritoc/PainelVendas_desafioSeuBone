const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const vendas = require('./vendasRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(usuarios)
    app.use(vendas)
}