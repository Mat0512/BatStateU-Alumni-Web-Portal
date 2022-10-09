const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const announcementController = require("../controllers/announcementController");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../uploads/uploads/images");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

console.log("controller", announcementController);

router.get(
    "/", //announcementController.validate('handleEditAnnouncement'),
    announcementController.handleGetAllAnnouncement
);

router.get(
    "/:id",
    // authMiddleware.verifyJWT,
    announcementController.handleGetOneAnnounncement
);

router.post(
    "/add",
    // authMiddleware.verifyJWT,
    upload.single("announcementImage"),
    announcementController.handlePostAnnouncement
);

router.put(
    "/edit/:id",
    // authMiddleware.verifyJWT,
    //     announcementController.validate('handleEditAnnouncement'),
    upload.single("announcementImage"),
    announcementController.handleEditAnnouncement
);

router.delete(
    "/delete/:id", //announcementController.validate('handleEditAnnouncement'),
    announcementController.handleDeleteAnnouncement
);

module.exports = router;
