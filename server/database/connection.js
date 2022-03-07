const mongoose = require('mongoose')




const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('- connected to MongoDB')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}



module.exports = connectDB