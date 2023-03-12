const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        let connect = await mongoose.connect(process.env.DB_URI)
        console.log(connect.connection.host);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = { connectDB }