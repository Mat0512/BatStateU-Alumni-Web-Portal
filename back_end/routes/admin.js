const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const refreshTokenController = require("../controllers/refreshTokenController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/auth", adminController.authenticateAdmin);
router.post("/signup", adminController.createAdmin);
router.get(
    "/profile/:username",
    authMiddleware.verifyJWT,
    adminController.getAdminUser
);
router.put(
    "/profile/edit",
    authMiddleware.verifyJWT,
    adminController.editAdmin
);
router.get("/refresh", refreshTokenController.handleAdminRefreshToken);

module.exports = router;
