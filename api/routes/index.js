const bodyParser = require('body-parser')
const usuarios = require('./usuariosRoute')
const vendas = require('./vendasRoute')
var cors = require('cors')

module.exports = app => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        next();
    });
    app.use(bodyParser.json())
    app.use(usuarios)
    app.use(vendas)
    app.use(cors({
        origin: 'http://localhost:3000',
        allowedHeaders: ['Content-Type']
    }))
}