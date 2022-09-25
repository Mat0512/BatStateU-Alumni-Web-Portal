const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/auth", adminController.authenticateAdmin);
router.post("/signup", adminController.createAdmin);

router.get("/profile/:username", verifyToken, adminController.getAdminUser);

router.put("/profile/edit", verifyToken, adminController.editAdmin);

module.exports = router;
