const express = require("express");
const router = express.Router();
const alumniTrackingController = require("../../controllers/alumniTrackingController.js");

router.post("/post", alumniTrackingController.hanldeAddAlumniTracking);

module.exports = router;
