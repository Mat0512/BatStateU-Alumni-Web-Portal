const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log("hello: ", authHeader);
    if (!authHeader) return res.sendStatus(401);
    // splits the string "bearer [token string] into array ["bearer"m, [token string]] to get the token string"
    const token = authHeader.split(" ")[1];

    console.log("token: ", token);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        if (err) {
            res.status(403);
            throw new Error(err);
        }
        console.log("token: ", token);
        req.user = token.username;
        next();
    });
};

module.exports = { verifyJWT };
