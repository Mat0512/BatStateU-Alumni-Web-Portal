const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const refreshTokenController = require("../controllers/refreshTokenController");
const authMiddleware = require("../middleware/authMiddleware");
const logoutController = require("../controllers/logoutController");

router.post("/auth", adminController.authenticateAdmin);
router.post("/signup", adminController.createAdmin);
router.get(
    "/account/:username",
    authMiddleware.verifyJWT,
    adminController.getAdminUser
);
router.put("/edit", authMiddleware.verifyJWT, adminController.editAdmin);
router.get("/refresh", refreshTokenController.handleAdminRefreshToken);
router.get("/logout", logoutController.handleAdminLogout);

module.exports = router;
