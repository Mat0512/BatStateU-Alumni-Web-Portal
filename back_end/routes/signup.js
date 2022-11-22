const express = require("express");
const router = express.Router();
const alumniController = require("../controllers/alumniController");
const adminController = require("../controllers/adminController");
const signupController = require("../controllers/signupController");

router.post("/alumni", alumniController.createAlumni);
router.post("/admin", adminController.createAdmin);

router.post("/alumni-verification", signupController.handleAlumniVerification);
router.post(
    "/alumni-setup-credentials/:id",
    signupController.handleVerifiedAlumni
);

module.exports = router;
