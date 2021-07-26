import Users from '../services/users'


const getAllUsers = async (_, res) => {
    const users = await Users.getAllUsers()
    return res.json(users)
}

const getUserById = async (req, res) => {
    const id = req.params.id
    const user = await Users.getUserById(id)
    if (!user) return res.status(204).end()
    return res.json(user)
}

const updateUserById = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        await Users.updateUserById(id, data)
        return res.end()
    } catch {
        return res.status(400).end()
    }
}

const deleteUserById = async (req, res) => {
    const id = req.params.id
    await Users.deleteUserById(id)
    return res.end()
}

const createUser = async (req, res) => {
    let data = req.body
    try {
        await Users.createUser(data)
        return res.end()
    } catch {
        return res.status(400).end()
    }
}


export default {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser
}