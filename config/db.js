const mongoose = require("mongoose");

const connectDB = async()=>{
     try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`database connected to ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Mongoose error ${error}`);
    }
}

module.exports = connectDB;