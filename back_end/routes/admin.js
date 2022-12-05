const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController.js");
const refreshTokenController = require("../controllers/refreshTokenController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const logoutController = require("../controllers/logoutController.js");
const { upload } = require("../configs/multer");
router.post("/auth", adminController.authenticateAdmin);
router.post("/signup", adminController.createAdmin);
router.get(
    "/account/:username",
    authMiddleware.verifyJWT,
    adminController.getAdminUser
);
router.put(
    "/edit",
    authMiddleware.verifyJWT,
    upload("avatar"),
    adminController.editAdmin
);
router.get("/refresh", refreshTokenController.handleAdminRefreshToken);
router.get("/logout", logoutController.handleAdminLogout);
router.post(
    "/edit-pass",
    authMiddleware.verifyJWT,
    adminController.handleEditPass
);

module.exports = router;
