import Movies from '../models/movies'

const getAllMovies = async () => {
    const movies = await Movies.find({})
        .sort({ publishedAt: 1 })
        .populate('User')
        .lean()
    return movies
}

const getMovieById = async id => {
    const movie = await Movies.findById(id).populate('User')
    return movie
}

const updateMovieById = async (id, data) => {
    await Movies.findByIdAndUpdate(id, data)
}

const deleteMovieById = async id => {
    await Movies.findByIdAndDelete(id)
}

const createMovie = async data => {
    await Movies.create(data)
}


export default {
    getAllMovies,
    getMovieById,
    updateMovieById,
    deleteMovieById,
    createMovie
}