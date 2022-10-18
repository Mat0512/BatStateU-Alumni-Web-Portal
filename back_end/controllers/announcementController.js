const Announcement = require("../models/Announcement");
const asyncHandler = require("express-async-handler");
const path = require("path");
const { body } = require("express-validator/check");

const handlePostAnnouncement = asyncHandler(async (req, res) => {
    const announcement = req.body;
    console.log("user: ", req.user);

    if (!(announcement.title && announcement.body)) {
        res.status(400);
        throw new Error("Incomplete anouncement parameter");
    }

    const newAnnouncement = await Announcement.createAndRecordOnLog({
        ...announcement,
        author: user,
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
    console.log("announcement data: ", announcement);
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
        req.body,
        req.file.originalname
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
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
});

const handleGetOneAnnounncement = asyncHandler(async (req, res) => {
    console.log("get one announcement invoked!");

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
    validate,
};
