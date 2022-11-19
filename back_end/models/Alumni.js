const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { Schema } = mongoose;

const alumniSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    username: String,
    password: String,
    avatar: String,
    refreshToken: {
        type: String,
        default: null,
    },
    contact: {
        phone: String,
        cellphone: String,
        email: String,
    },
    address: {
        type: String,
    },
    alumniBackground: {
        srCode: String,
        program: String,
        batch: Number,
        studentEmail: String,
    },
});

const Alumni = mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
