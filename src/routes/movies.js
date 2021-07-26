import { Router } from 'express'
import MovieController from '../controllers/movies'
import authentificate from '../middlewares/authentificate'

const route = Router()

route.route('/')
    .get(authentificate(['USER', 'ADMIN', 'MODERATOR']), MovieController.getAllMovies)
    .post(authentificate(['ADMIN', 'MODERATOR']), MovieController.createMovie)

route.route('/:id')
    .get(authentificate(['USER', 'ADMIN', 'MODERATOR']), MovieController.getMovieById)
    .put(authentificate(['ADMIN', 'MODERATOR']), MovieController.updateMovieById)
    .delete(authentificate(['ADMIN']), MovieController.deleteMovieById)

export default route