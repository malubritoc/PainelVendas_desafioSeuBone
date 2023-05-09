const database = require('../models')

class UsuarioController {
    static async getAllUsers(req, res) {
        try {
            const AllUsers = await database.Usuarios.findAll()
            return res.status(200).json(AllUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getOneUser (req, res) {
        const { id } = req.params
        try {
            const OneUser = await database.Usuarios.findOne( { where: { id: Number(id)} } )
            return res.status(200).json(OneUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser (req, res) {
        const newUser = req.body
        try {
            const newCreatedUser = await database.Usuarios.create(newUser)
            return res.status(200).json(newCreatedUser)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUser (req, res) {
        const newInfo = req.body
        const { id } = req.params
        try {
            await database.Usuarios.update(newInfo, { where: {id: Number(id)} })
            const UpdatedUser = await database.Usuarios.findOne( { where: { id: Number(id)} } )
            return res.status(200).json(UpdatedUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUser (req, res) {
        const { id } = req.params
        try {
            await database.Usuarios.destroy( {where: { id: Number(id)}} )
            return res.status(200).json({ message: `id ${id} deletado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsuarioController