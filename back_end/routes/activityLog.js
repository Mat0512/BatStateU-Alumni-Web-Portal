const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const activityLogHandler = require("../controllers/activityLogController");

router.get(
    "/",
    //authMiddleware.verifyJWT,
    activityLogHandler.handleActivityLog
);

module.exports = router;
