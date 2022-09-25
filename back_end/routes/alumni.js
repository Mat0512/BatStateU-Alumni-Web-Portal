const express = require("express");
const router = express.Router();
const alumniController = require("../controllers/alumniController");
const refreshTokenController = require("../controllers/refreshTokenController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/auth", alumniController.authenticateAlumni);
router.post("/signup", alumniController.createAlumni);
router.get(
    "/account/:username",
    authMiddleware.verifyJWT,
    alumniController.getAlumniUser
);
router.put("/edit", authMiddleware.verifyJWT, alumniController.editAlumni);
router.get("/refresh", refreshTokenController.handleAlumniRefreshToken);

module.exports = router;
