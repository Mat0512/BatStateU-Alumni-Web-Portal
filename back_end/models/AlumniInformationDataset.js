const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumniInformationDatasetSchema = new Schema({
    image: String,
    "First Name": String,
    "Middle Name": String,
    "Last Name": String,
    Age: Number,
    Gender: String,
    "Civil Status": String,
    "Permanent Address": String,
    "Contact Number": String,
    "Email Address": String,
    "Father's First Name": String,
    "Father's Middle Name": String,
    "Father's Last Name": String,
    "Mother's First Name": String,
    "Mother's Middle Name": String,
    "Mother's Last Name": String,
    "Title of seminar/ conference/ workshop/ short courses attended": String,
    "Date of Attendance": Date,
    "Conducted/Sponsored by": String,
    "Special skills/Hobbies": String,
    "Membership in associations/organizations": String,
    "Sr-code": String,
    "Batch/Year Graduated": String,
    Program: String,
    Major: String,
});
const AlumniInformationDataset = mongoose.model(
    "AlumniInformationDataset",
    alumniInformationDatasetSchema
);

module.exports = AlumniInformationDataset;
