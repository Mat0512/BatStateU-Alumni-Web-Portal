const express = require("express");
const router = express.Router();
const { handleUsernames } = require("../../controllers/alumniController");

router.get("/:username", handleUsernames);

module.exports = router;
