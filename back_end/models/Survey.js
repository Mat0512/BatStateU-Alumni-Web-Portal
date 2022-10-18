const mongoose = require("mongoose");
const { Schema } = mongoose;
const Admin = require("../models/Admin");
const ActivityLog = require("../models/ActivityLog");

const surveySchema = new Schema(
    {
        name: {
            type: String,
        },
        link: {
            type: String,
        },
        description: {
            type: String,
        },
        college: {
            type: String,
        },
        postedBy: {
            type: String,
        },
    },
    { timestamps: true }
);

surveySchema.statics.createAndRecordOnLog = async (surveyData) => {
    const admin = await Admin.findOne({ username: surveyData.author });
    if (!admin) {
        throw new Error("Author not found");
    }

    const survey = await Survey.create({
        surveyData,
        postedBy: `${admin.name.firstName} ${admin.name.lastName}`,
    });

    if (!survey) {
        throw new Error("Survey not found");
    }

    const activityLog = await ActivityLog.create({
        dateCreated: survey.dateCreated,
        user: survey.authorName,
        activity: "Create",
        entry: "Survey",
        description: `Title: ${survey.title}`,
    });

    if (!activityLog) {
        throw new Error("error on activity log document");
    }

    return survey;
};

surveySchema.statics.updateAndRecordOnLog = async (id, surveyData) => {
    const filteredSurveyData =
        controllersUtilities.removeEmptyProp(announcemenData);

    const formattedSurveyQuery =
        controllersUtilities.formatUpdateData(filteredSurveyData);

    const survey = await Survey.findByIdAndUpdate(
        { _id: id },
        {
            $set: formattedSurveyQuery,
        },
        {
            new: true,
        }
    );
    if (!survey) {
        throw new Error("Survey not found");
    }

    const activityLog = await ActivityLog.create({
        dateCreated: survey.dateCreated,
        user: survey.c,
        activity: "Edit",
        entry: "Survey",
        description: surveyData.description,
    });

    if (!activityLog) {
        throw new Error("error on activity log document");
    }

    console.log("Activity Log: ", activityLog);

    return survey;
};

surveySchema.pre("remove", async function (next) {
    console.log("REMOVE MIDDLEWARE INVOKED!!!");
    const survey = this;
    const activityLog = await ActivityLog.create({
        dateCreated: survey.dateCreated,
        user: survey.postedBy,
        activity: "Delete",
        entry: "Survey",
        description: `Remove Survey: ${survey.title}`,
    });

    if (!activityLog) {
        throw new Error("error on activity log document");
    }

    next();
});

const Survey = mongoose.Model("Survey", surveySchema);

module.exports = Survey;
