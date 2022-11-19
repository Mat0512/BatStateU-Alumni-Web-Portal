const express = require("express");
const router = express.Router();
const alumniController = require("../controllers/alumniController");
const adminController = require("../controllers/adminController");

router.post("/alumni", alumniController.createAlumni);
router.post("/admin", adminController.createAdmin);

router.post("/alumni-verification", (req, res) => {
    console.log("req body: ", req.body);
    res.status(200).send("verify alumni api");
});

module.exports = router;
