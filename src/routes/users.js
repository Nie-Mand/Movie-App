import { Router } from 'express'
import UserController from '../controllers/users'
import authentificate from '../middlewares/authentificate'


const route = Router()
route.use(authentificate(['ADMIN']))

route.route('/')
    .get(UserController.getAllUsers)
    .post(UserController.createUser)

route.route('/:id')
    .get(UserController.getUserById)
    .put(UserController.updateUserById)
    .delete(UserController.deleteUserById)

export default route