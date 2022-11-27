const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware.js");
const announcementController = require("../controllers/announcementController.js");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/images/announcements");
    },
    filename: (req, file, callback) => {
        callback(
            null,
            uuidv4() + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage: storage });

router.get(
    "/",
    announcementController.validate("handleEditAnnouncement"),
    announcementController.handleGetAllAnnouncement
);

router.get(
    "/:id",
    // authMiddleware.verifyJWT,
    announcementController.handleGetOneAnnounncement
);

router.post(
    "/add",
    authMiddleware.verifyJWT,
    upload.single("announcementImage"),
    announcementController.handlePostAnnouncement
);

router.post(
    "/edit/:id",
    authMiddleware.verifyJWT,
    //     announcementController.validate('handleEditAnnouncement'),
    upload.single("announcementImage"),
    announcementController.handleEditAnnouncement
);

router.delete(
    "/delete/:id",
    announcementController.validate("handleEditAnnouncement"),
    announcementController.handleDeleteAnnouncement
);

router.get(
    "/image/:filename",
    authMiddleware.verifyJWT,
    announcementController.handleGetAnnouncementImage
);

module.exports = router;
