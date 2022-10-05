const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const announcementController = require("../controllers/announcementController");

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
    announcementController.handlePostAnnouncement
);

router.put(
    "/edit/:id",
    // authMiddleware.verifyJWT,
    //     announcementController.validate('handleEditAnnouncement'),
    announcementController.handleEditAnnouncement
);

router.delete(
    "/delete/:id", //announcementController.validate('handleEditAnnouncement'),
    announcementController.handleDeleteAnnouncement
);

module.exports = router;
