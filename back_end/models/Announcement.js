const mongoose = require("mongoose");
const { Schema } = mongoose;
const ActivityLog = require("./ActivityLog");
const Admin = require("../models/Admin");
const controllersUtilities = require("../utilities/controllersUtilities");

const announcementSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: String,
        body: String,
        author: String,
    },
    { timestamps: true }
);

//creates a record on activity log after the announcement is created
announcementSchema.statics.updateAndRecordOnLog = async (
    id,
    announcemenData,
    image
) => {
    announcemenData.image = image;
    const filteredAnnouncementData =
        controllersUtilities.removeEmptyProp(announcemenData);
    const formattedAnnouncementQuery = controllersUtilities.formatUpdateData(
        filteredAnnouncementData
    );

    const announcement = await Announcement.findByIdAndUpdate(
        { _id: id },
        {
            $set: formattedAnnouncementQuery,
        },
        {
            new: true,
        }
    );
    if (!announcement) {
        throw new Error("Announcement not found");
    }

    const activityLog = await ActivityLog.create({
        dateCreated: announcement.dateCreated,
        user: announcement.authorName,
        activity: "Edit",
        entry: "Announcement",
        description: announcementData.description,
    });

    if (!activityLog) {
        throw new Error("error on activity log document");
    }

    console.log("Activity Log: ", activityLog);

    return announcement;
};

announcementSchema.statics.createAndRecordOnLog = async (announcemenData) => {
    const admin = await Admin.findOne({ username: announcemenData.author });
    if (!admin) {
        throw new Error("Author not found");
    }

    const announcement = await Announcement.create({
        announcemenData,
        author: `${admin.name.firstName} ${admin.name.lastName}`,
    });

    if (!announcement) {
        throw new Error("Announcement not found");
    }

    const activityLog = await ActivityLog.create({
        dateCreated: announcement.dateCreated,
        user: announcement.authorName,
        activity: "Create",
        entry: "Announcement",
        description: `Title: ${announcement.title}`,
    });

    if (!activityLog) {
        throw new Error("error on activity log document");
    }

    return announcement;
};

announcementSchema.pre("remove", async function (next) {
    console.log("REMOVE MIDDLEWARE INVOKED!!!");
    const announcement = this;
    const activityLog = await ActivityLog.create({
        dateCreated: announcement.dateCreated,
        user: announcement.author,
        activity: "Delete",
        entry: "Announcement",
        description: `Remove Announcement: ${announcement.title}`,
    });

    if (!activityLog) {
        throw new Error("error on activity log document");
    }

    next();
});

const Announcement = mongoose.model("Announcement", announcementSchema);

module.exports = Announcement;
