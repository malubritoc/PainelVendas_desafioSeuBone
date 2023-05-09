const { Router } = require('express')
const VendaController = require('../controllers/VendaController')

const router = Router()

router.get('/vendas', VendaController.getAllSells)
router.get('/vendas/:id', VendaController.getOneSell)
router.post('/vendas', VendaController.createSell)
router.put('/vendas/:id', VendaController.updateSell)
router.delete('/vendas/:id', VendaController.deleteSell)
router.get('/vendas/usuario/:usuarios_id', VendaController.getUserSells)

module.exports = router