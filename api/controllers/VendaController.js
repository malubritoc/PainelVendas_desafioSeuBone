const database = require('../models')

class VendaController {
    static async getAllSells(req, res) {
        try {
            const AllSells = await database.Vendas.findAll()
            return res.status(200).json(AllSells)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getOneSell (req, res) {
        const { id } = req.params
        try {
            const OneSell = await database.Vendas.findOne( { where: { id: Number(id)} } )
            return res.status(200).json(OneSell)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getUserSells (req, res) {
        const { usuarios_id } = req.params
        try {
            const UserSells = await database.Vendas.findAll( { where: { usuarios_id: Number(usuarios_id)} } )
            return res.status(200).json(UserSells)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createSell (req, res) {
        const newSell = req.body
        try {
            const newCreatedSell = await database.Vendas.create(newSell)
            return res.status(200).json(newCreatedSell)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateSell (req, res) {
        const newInfo = req.body
        const { id } = req.params
        try {
            await database.Vendas.update(newInfo, { where: {id: Number(id)} })
            const UpdatedSell = await database.Vendas.findOne( { where: { id: Number(id)} } )
            return res.status(200).json(UpdatedSell)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteSell (req, res) {
        const { id } = req.params
        try {
            await database.Vendas.destroy( {where: { id: Number(id)}} )
            return res.status(200).json({ message: `id ${id} deletado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = VendaController