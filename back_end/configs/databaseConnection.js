const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler"); //express 5 will function similar to this lib

const connectMongoDB = asyncHandler(async () => {
    try {
        console.log("connecting to database");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connected");
        // mongoose
        //     .connect(process.env.MONGODB_URI)
        //     .catch((err) => {
        //         throw new Error(err);
        //     })
        //     .then(() => console.log("database connected!"));
    } catch (err) {
        throw new Error(err.stack);
    }
});

module.exports = connectMongoDB;
