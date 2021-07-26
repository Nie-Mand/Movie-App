import Movies from '../services/movies'

const getAllMovies = async (_, res) => {
    const movies = await Movies.getAllMovies()
    return res.json(movies)
}

const getMovieById = async (req, res) => {
    const id = req.params.id
    const movie = await Movies.getMovieById(id)
    if (!movie) return res.status(204).end()
    return res.json(movie)
}

const updateMovieById = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        await Movies.updateMovieById(id, data)
        return res.end()
    } catch {
        return res.status(400).end()
    }
}

const deleteMovieById = async (req, res) => {
    const id = req.params.id
    await Movies.deleteMovieById(id)
    return res.end()
}

const createMovie = async (req, res) => {
    let data = req.body
    const publishedBy = req.payload._id
    try {
        await Movies.createMovie(data)
        return res.end()
    } catch {
        return res.status(400).end()
    }
}

export default {
    getAllMovies,
    getMovieById,
    updateMovieById,
    deleteMovieById,
    createMovie
}
