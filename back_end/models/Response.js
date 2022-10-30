const mongoose = require("mongoose");
const { Schema } = mongoose;

const responseSchema = new Schema({
    surveyId: {
        type: mongoose.ObjectId,
        ref: "Survey",
    },
    question: String,
    answer: Schema.Types.Mixed,
});

const Response = mongoose.model("Response", responseSchema);
module.exports = Response;
