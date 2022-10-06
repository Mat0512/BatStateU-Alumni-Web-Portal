const Alumni = require("../models/Alumni");
const Admin = require("../models/Admin");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const handleAlumniRefreshToken = asyncHandler(async (req, res) => {
    console.log("cookies: ", req.cookies);
    const cookies = req.cookies;
    console.log("req on refresh token route: ", req.cookies);

    if (!cookies?.jwt) {
        res.status(401);
        throw new Error("missing cookies");
    }

    const refreshToken = cookies.jwt;

    const foundUser = await Alumni.findOne({
        refreshToken: refreshToken,
    }).exec();

    console.log("found user: ", foundUser);

    if (!foundUser) {
        res.statusCode = 403;
        throw new Error("invalid token");
    }

    const decoded = await jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
    );
    if (!decoded || decoded.username !== foundUser.username) {
        console.log("!decoded: ", decoded);
        res.statusCode(403);
        throw new Error("invalid token");
    }

    console.log("decoded: ", decoded);

    const accessToken = jwt.sign(
        { username: decoded.username },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: "30s",
        }
    );

    res.status(200).json({
        username: foundUser.username,
        token: accessToken,
        avatar: "",
    });
});

const handleAdminRefreshToken = asyncHandler(async (req, res) => {
    //checks if username is taken
    const cookies = req.cookies;
    console.log("req on refresh token route: ", req);
    if (!cookies?.jwt) {
        res.status(401);
        throw new Error("missing cookies");
    }

    const refreshToken = cookies.jwt;

    const foundUser = await Admin.findOne({
        refreshToken: refreshToken,
    }).exec();

    if (!foundUser) {
        res.statusCode(403);
        throw new Error("invalid token");
    }

    const decoded = await jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
    );
    if (!decoded || decoded.username !== foundUser.username) {
        res.statusCode(403);
        throw new Error("invalid token");
    }

    const accessToken = jwt.sign(
        { username: decoded.username },
        process.env.SECRET_KEY,
        {
            expiresIn: "30s",
        }
    );

    res.status(200).json({
        username: foundUser.username,
        token: accessToken,
        avatar: "",
    });
});

module.exports = { handleAdminRefreshToken, handleAlumniRefreshToken };
