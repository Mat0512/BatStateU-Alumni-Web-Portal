const mongoose = require("mongoose");
// const asyncHandler = require("express-async-handler"); express 5 will function similar to this lib

const connectMongoDB = () => {
    mongoose
        .connect(process.env.MONGODB_URI)
        .catch((err) => {
            throw new Error(err);
        })
        .then(() => console.log("database connected!"));
};

module.exports = connectMongoDB;
