const mongoose = require("mongoose");
const { Schema } = mongoose;
const ActivityLog = require("../models/ActivityLog");
const controllersUtilities = require("../utilities/controllersUtilities");

const surveySchema = new Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        college: {
            type: String,
        },
        gLink: {
            type: String,
        },
        editableGLink: {
            type: String,
        },
        postedBy: {
            type: String,
        },
    },
    { timestamps: true }
);

surveySchema.statics.createAndRecordOnLog = async (surveyData) => {
    console.log("survey data at create: ", surveyData);
    const survey = await Survey.create({
        title: surveyData.title,
        description: surveyData.description,
        college: surveyData.college,
        gLink: surveyData.gLink,
        editableGLink: surveyData.editableGLink,
        postedBy: surveyData.postedBy,
    });

    console.log("Survey created at statics: ", survey);

    if (!survey) {
        throw new Error("Survey not found");
    }

    const activityLog = await ActivityLog.create({
        user: survey.postedBy,
        activity: "Create",
        entry: "Survey",
        description: `Title: ${survey.title}`,
    });

    if (!activityLog) {
        throw new Error("error on activity log document");
    }

    console.log("Survey: ", survey);
    return survey;
};

surveySchema.statics.updateAndRecordOnLog = async (id, surveyData) => {
    const filteredSurveyData = controllersUtilities.removeEmptyProp(surveyData);
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
        user: survey.postedBy,
        activity: "Edit",
        entry: "Survey",
        description: `Edited Survey: ${survey.title}`,
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
        user: survey.postedBy,
        activity: "Delete",
        entry: "Survey",
        description: `Remove Survey: ${survey.title}`,
    });

    if (!activityLog) {
        throw new Error("error on activity log document");
    }

    console.log("Activity log: ", activityLog);

    next();
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
