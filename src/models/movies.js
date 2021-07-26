import Mongoose from 'mongoose'

export default Mongoose.models.Movie || Mongoose.model('Movie', new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxLength: 140
    },
    rating: Number,
    coverImage: String,
    url: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        default: new Date()
    },
    publishedBy: {
        type: Mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
}))