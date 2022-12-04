const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware.js");
const asyncHandler = require("express-async-handler");

router.get(
    "/auth/cubejs-token",
    authMiddleware.verifyJWT,
    asyncHandler(async (req, res) => {
        console.log("hello");
        const token = await jwt.sign(
            { user: req.user },
            process.env.CUBE_JS_SECRET,
            {
                expiresIn: "1d",
            }
        );
        res.json({
            // Take note: cubejs expects the JWT payload to contain an object!
            token: token,
        });
    })
);

module.exports = router;
