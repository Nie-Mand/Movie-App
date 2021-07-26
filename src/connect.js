import Mongoose from "mongoose"


const connect = async () => {
    const uri = process.env.DB_URL
    const config = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }

    await Mongoose.connect(uri, config)
        .then(() => console.log('Connected to db'))
        .catch(console.error)
}

export default connect