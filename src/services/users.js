import Users from '../models/users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const getAllUsers = async () => {
    const users = await Users.find({})
        .select('role username createdAt')
        .sort({ createdAt: 1 })
        .lean()
    return users
}

const getUserById = async id => {
    const user = await Users.findById(id).select('role username createdAt')
    return user
}

const updateUserById = async (id, data) => {
    if (data.password)
        data.password = await bcrypt.hash(data.password, 10)
    await Users.findByIdAndUpdate(id, data)
}

const deleteUserById = async id => {
    await Users.findByIdAndDelete(id)
}

const createUser = async data => {
    data.password = await bcrypt.hash(data.password, 10)
    await Users.create(data)
}

const login = async (username, password) => {
    const user = await Users.findOne({ username }).lean()
    console.log({ user })
    if (!user) throw new Error("User Doesnt Exist")
    const isPasswordOkay = await bcrypt.compare(password, user.password)
    if (!isPasswordOkay) throw new Error("Incorrect Password")
    delete user.password
    const token = await jwt.sign(user, process.env.SECRET, { expiresIn: '1h' })
    return token
}

export default {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser,
    login
}