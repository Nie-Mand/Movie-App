import Mongoose from 'mongoose'

export default Mongoose.models.User || Mongoose.model('User', new Mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'USER',
        enum: ['USER', 'ADMIN', 'MODERATOR']
    }
}, { timestamps: true }))