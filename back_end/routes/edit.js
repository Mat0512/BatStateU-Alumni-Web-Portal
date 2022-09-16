const express = require("express");
const router = express.Router;
const alumniController = require("../controllers/alumniController");

router("/alumni", (req, res) => {
    res.send("alumni route");
});
