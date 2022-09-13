const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumniSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    username: String,
    password: String,
    avatar: Buffer,
    contact: {
        phone: String,
        cellphone: String,
    },
    address: {
        houseNumber: String,
        building: String,
        street: String,
        city: String,
        province: String,
        country: String,
    },
    alumniBackground: {
        fullName: String,
        srCode: String,
        degree: String,
        batch: Number,
        studentEmail: String,
    },
});

const Alumni = mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
