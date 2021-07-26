import { Router } from 'express'
import Users from '../services/users'
const route = Router()

route.post('/', async (req, res) => {
    const { username, password } = req.body
    try {
        const token = await Users.login(username, password)
        return res.json({ token })
    } catch (e) {
        return res.status(401).json({ error: e.message })
    }
})

export default route