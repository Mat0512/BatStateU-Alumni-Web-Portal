const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verifyJWT } = require("../middleware/authMiddleware");

router.get("/auth/cubejs-token", verifyJWT, async (req, res) => {
    const token = await jwt.sign(req.user, process.env.CUBEJS_API_SECRET, {
        expiresIn: "1d",
    });
    console.log("cube token: ", token);
    res.json({
        // Take note: cubejs expects the JWT payload to contain an object!
        token: token,
    });
});

module.exports = router;
