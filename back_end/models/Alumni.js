const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumniSchema = new Schema({
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    username: { type: String, default: null, unique: true },
    password: { type: String, default: null },
    verified: Boolean,
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
        studentEmail: { type: String, default: null },
    },
});

const Alumni = mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
