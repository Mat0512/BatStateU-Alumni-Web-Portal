const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");
const alumniInformationController = require("../../controllers/alumniInformationController");

router.get(
    "/dummy",
    authMiddleware.verifyJWT,
    alumniInformationController.handleGetAlumniInformationDataset
);
router.get("/dummy:id");
router.get("/");
router.get("/");
router.post("/:id");
router.put("/:id");

module.exports = router;
