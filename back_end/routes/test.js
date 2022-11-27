const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send(" / path");
});

router.get("/:id", (req, res) => {
    res.status(200).send(`id path ${req.params.id}`);
});

router.get("/nested", (req, res) => {
    res.status(200).send(" / nested");
});

router.get("/nested/nested2", (req, res) => {
    res.status(200).send(" nested/nested2");
});

module.exports = router;
