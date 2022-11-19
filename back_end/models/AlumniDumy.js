const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumniDummySchema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    age: Number,
    gender: String,
    civilStatus: String,
    phone: String,
    college: String,
    cellphone: String,
    email: String,
    address: String,
    program: String,
    batch: String,
    srCode: String,
    studentEmail: String,
});

const AlumniDummy = mongoose.model("AlumniDummy", alumniDummySchema);

module.exports = AlumniDummy;
