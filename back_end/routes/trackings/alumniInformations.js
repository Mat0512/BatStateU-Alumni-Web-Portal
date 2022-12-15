const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");
const alumniInformationController = require("../../controllers/alumniInformationController");

router.get(
    "/dummy",
    // authMiddleware.verifyJWT,
    alumniInformationController.handleGetAlumniInformationDataset
);
router.get("/dummy:id");

router.get(
    "/file/:id",
    alumniInformationController.handleGenerateAlumniInfoPdf
);
router.get("/", alumniInformationController.handleGetAlumniInformation);
router.get("/:id", alumniInformationController.handleGetOneAlumniInformation);
router.post("/post", alumniInformationController.handleCreateAlumniInformation);

module.exports = router;
