import dotenv from 'dotenv'
dotenv.config()
import Express from 'express'
import connect from './connect'
import { json } from 'body-parser'
import cors from 'cors'
import Routes from './routes'

const app = Express()

// Middlewares
app.use(json())
app.use(cors())

// Routes
app.use('/movies', Routes.Movies)
app.use('/users', Routes.Users)
app.use('/login', Routes.Login)

connect()
    .then(() => {
        app.listen(8000, () => console.log('Server is Running'))
    })