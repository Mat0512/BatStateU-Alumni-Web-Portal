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

activityLogSchema.statics.findWithDateRange = async (query) => {
    try {
        const { startDate, endDate, ...newQuery } = query;
        newQuery.updatedAt = {
            $gte: startDate,
            ...(endDate !== undefined && { $lte: endDate }),
        };
        console.log("new query: ", newQuery);
        const activityLog = await ActivityLog.find(newQuery);

        return activityLog;
    } catch (error) {
        throw new Error(error);
    }
};

const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);

module.exports = ActivityLog;
