const express = require("express");
const router = express.Router();
const alumniController = require("../controllers/alumniController");
const adminController = require("../controllers/adminController");

router.post("/alumni", alumniController.createAlumni);
router.post("/admin", adminController.createAdmin);

module.exports = router;
