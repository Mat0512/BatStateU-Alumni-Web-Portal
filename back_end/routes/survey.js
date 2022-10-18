const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "get all route" });
});

router.get("/:id", (req, res) => {
    res.status(200).json({ message: `get survey by id: ${req.params.id}` });
});

router.post("/post", (req, res) => {
    res.status(200).json({ message: "post announcement" });
});

router.put("/update/:id", (req, res) => {
    res.status(200).json({ message: "update announcement" });
});

router.delete("/delete/:id", (req, res) => {
    res.status(200).json({ message: "update announcement" });
});

module.exports = router;
