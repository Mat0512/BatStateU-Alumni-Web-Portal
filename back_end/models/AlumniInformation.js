const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumniInformationSchema = new Schema({
    respondent: String,
    image: String,
    firstName: String,
    middleName: String,
    lastName: String,
    age: Number,
    gender: String,
    civilStatus: String,
    address: String,
    contactNumber: String,
    emailAddress: String,
    firstNameFather: String,
    middleNameFather: String,
    lastNameFather: String,
    firstNameMother: String,
    middleNameMother: String,
    lastNameMother: String,
    trainingPrograms: [
        {
            title: String,
            date: Date,
            organizer: String,
        },
    ],
    educationalBackground: [
        {
            educationalLevel: String,
            honors: String,
            major: String,
            yearGraduated: Number,
            schoolName: String,
        },
    ],
    skills: [String],
    organizations: [String],
    srCode: String,
    yearGraduated: Number,
    program: String,
});

const AlumniInformation = mongoose.model(
    "AlumniInformation",
    alumniInformationSchema
);

module.exports = AlumniInformation;
