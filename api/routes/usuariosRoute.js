const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')

const router = Router()

router.get('/usuarios', UsuarioController.getAllUsers)
router.get('/usuarios/:id', UsuarioController.getOneUser)
router.post('/usuarios', UsuarioController.createUser)
router.put('/usuarios/:id', UsuarioController.updateUser)
router.delete('/usuarios/:id', UsuarioController.deleteUser)

module.exports = router