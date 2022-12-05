const ActivityLog = require("../models/ActivityLog");

const handleActivityLog = async (req, res) => {
    const includesDate = req.query.hasOwnProperty("startDate");

    console.log("query at activity log: ", req.query);
    const activityLog = includesDate
        ? await ActivityLog.findWithDateRange(req.query)
        : await ActivityLog.find(req.query);

    res.status(200).json(activityLog);
};

module.exports = { handleActivityLog };
