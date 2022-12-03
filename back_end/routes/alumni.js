const express = require("express");
const router = express.Router();
const alumniController = require("../controllers/alumniController");
const refreshTokenController = require("../controllers/refreshTokenController");
const authMiddleware = require("../middleware/authMiddleware");
const logoutController = require("../controllers/logoutController");
router.post("/auth", alumniController.authenticateAlumni);
router.post("/signup", alumniController.createAlumni);
router.get(
    "/account/:username",
    authMiddleware.verifyJWT,
    alumniController.getAlumniUser
);
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/images/alumni");
    },
    filename: (req, file, callback) => {
        callback(
            null,
            uuidv4() + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage: storage });

router.put("/edit", authMiddleware.verifyJWT, alumniController.editAlumni);
router.get("/refresh", refreshTokenController.handleAlumniRefreshToken);

router.get(
    "/logout",
    authMiddleware.verifyJWT,
    logoutController.handleAlumniLogout
);
router.post(
    "/edit-pass",
    authMiddleware.verifyJWT,
    alumniController.handleEditPass
);

module.exports = router;
