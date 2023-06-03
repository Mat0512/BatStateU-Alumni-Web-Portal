const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumniSchema = new Schema({
    name: {
        firstName: String,
        middleName: String,
        lastName: String,
    },
    username: { type: String, default: null, unique: true, sparse: true },
    password: { type: String, default: null },
    verified: Boolean,
    avatar: {
        type: String,
        default:
            "https://alumniportal.sgp1.digitaloceanspaces.com/eab52ec1-9dc1-46ab-bcb0-541962b78e29-1670048664479-github.png",
    },
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
