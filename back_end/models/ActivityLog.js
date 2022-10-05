const mongoose = require("mongoose");
const { Schema } = mongoose;

const activityLogSchema = new Schema(
    {
        user: String,
        activity: String,
        entry: String,
        description: String,
    },
    { timestamps: true }
);

const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);

module.exports = ActivityLog;
