const Announcement = require("../models/Announcement");
const asyncHandler = require("express-async-handler");
const path = require("path");
const { body } = require("express-validator/check");

const handlePostAnnouncement = asyncHandler(async (req, res) => {
    const announcement = { ...req.body };

    console.log("announcement from controller : ", announcement);

    if (!(announcement.title && announcement.body)) {
        res.status(400);
        throw new Error("Incomplete anouncement parameter");
    }

    const newAnnouncement = await Announcement.createAndRecordOnLog({
        ...announcement,
    });

    if (!newAnnouncement) {
        res.sendStatus(500);
    }

    res.sendStatus(201);
});

const handleEditAnnouncement = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.statusCode(400);
        throw new Error("ID is missing.");
    }

    const announcement = req.body;
    console.log("announcement data from edit controller: ", announcement);
    if (
        !announcement.title &&
        !announcement.body &&
        !announcement.image &&
        !announcement.description
    ) {
        console.log("validated!!!");
        res.sendStatus(400);
    }

    const updatedAnnouncement = await Announcement.updateAndRecordOnLog(
        req.params.id,
        req.body
    );

    if (!updatedAnnouncement) {
        throw new Error("Announcement can not update.");
    }

    console.log("Upadated Announcement: ", updatedAnnouncement);

    res.status(200).send(updatedAnnouncement);
});

const handleDeleteAnnouncement = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.sendStatus(400);
    }

    const foundAnnouncement = await Announcement.findById(req.params.id);
    console.log("foundAnnouncement: ", foundAnnouncement);
    if (!foundAnnouncement) {
        res.sendStatus(204);
        return;
    }
    foundAnnouncement.remove();

    res.status(200).send("deleted");
});

const handleGetAllAnnouncement = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || "0");
    console.log("page: ", page);
    const pageLimit = 4;
    const total = await Announcement.countDocuments({});
    console.log("total page: ", total / pageLimit);
    const announcements = await Announcement.find({})
        .limit(pageLimit)
        .skip(pageLimit * page);

    res.status(200).json({
        totalPage: Math.ceil(total / pageLimit),
        data: announcements,
    });
});

const handleGetAnnouncementsByTitle = async (req, res) => {
    console.log("search ");
    // const announcements = await Announcement.find({
    //     title: "new",
    //     // { $regex: req.query.title, $options: "i" },
    // });
    res.status(200).json({ message: `query: ${req.query.title}` });
};

const handleGetOneAnnounncement = asyncHandler(async (req, res) => {
    if (!req.params.id) {
        res.sendStatus(400);
    }

    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
        res.sendStatus(404);
    }

    console.log("Announcement: ", announcement);
    res.status(200).json(announcement);
});

const handleGetAnnouncementImage = asyncHandler(async (req, res) => {
    console.log("image route");
    if (!req.params.filename) {
        res.sendStatus(400);
        return;
    }

    console.log("query: ", req.params.filename);

    const root = path.dirname(require.main.filename);
    const imageDirectory = path.join(
        root,
        "/uploads/images/announcements",
        req.params.filename
    );

    res.status(200).sendFile(imageDirectory);
});

//not done
const validate = (method) => {
    switch (method) {
        case "handlePostAnnouncement": {
            return [
                body("title", "Title is required").exists(),
                body("authorName", "Title is required").exists(),
                body("image", "Title is required").exists(),
                body("body", "Title is required").exists(),
            ];
        }

        case "handleEditAnnouncement": {
            return [];
        }

        default:
            throw new Error("Invalid Method");
    }
};

module.exports = {
    handlePostAnnouncement,
    handleEditAnnouncement,
    handleDeleteAnnouncement,
    handleGetAllAnnouncement,
    handleGetOneAnnounncement,
    handleGetAnnouncementImage,
    handleGetAnnouncementsByTitle,
    validate,
};
