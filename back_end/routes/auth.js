const express = require("express");
const router = express.Router();
const alumniController = require("../controllers/alumniController");

router.get("/alumni", alumniController.authenticateAlumni);

router.get("/admin", (req, res) => {
    res.send("admin route");
});

module.exports = router;
