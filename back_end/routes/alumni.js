const express = require("express");
const router = express.Router();
const alumniController = require("../controllers/alumniController");
const verifyJWT = require("../middleware/authMiddleware");

router.post("/auth", alumniController.authenticateAlumni);
router.post("/signup", alumniController.createAlumni);
router.get("/account/:username", verifyJWT, alumniController.getAlumniUser);
router.put("/edit", verifyJWT, alumniController.editAlumni);

module.exports = router;
