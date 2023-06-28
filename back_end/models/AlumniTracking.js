const mongoose = require("mongoose");
const { Schema } = mongoose;

const alumniTrackingSchema = new Schema({
    "First Name": String,
    "Middle Name": String,
    "Last Name": String,
    Gender: String,
    Age: Number,
    "Civil Status": String,
    Address: String,
    "Contact Number": String,
    "Email Address": String,
    Batch: Number,
    "Highest Educational Attainement": String,
    "SR-Code": String,
    "Student Email": String,
    College: String,
    Program: String,
    Employability: String,
    "Current Nature of Work Field": String,
    "Employement Characteristics": String,
    "Status of Professional Registration": String,
    "Loaction of Work": String,
    "Company Name": String,
    "Waiting Time Before Employment": String,
    "Job Satisfaction": String,
    "Is your college degree relevant to your jo?b": String,
    "Is the curriculum you've finished relevant to your current job?": String,
    "What are the competencies you've learned in college in which you find useful in your current job?":
        String,
    "Unemployment Reason": String,
});
