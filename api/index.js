const express = require('express')
const cors = require('cors');
const routes = require('./routes')

const app = express()

app.use(cors());

const port = 8000



  

routes(app)

app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`))

module.exports = app