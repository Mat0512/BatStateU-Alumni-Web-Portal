const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    username: { type: String, default: null, unique: true, sparse: true },
    password: String,
    gender: String,
    avatar: String,
    role: String,
    refreshToken: {
        type: String,
        default: null,
    },
    contact: {
        phone: String,
        email: String,
    },
    address: {
        type: String,
    },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
