//todo
/*
     1. routes/api endpoint of user registration and authentication (done)
     2. middleware for jwt (done)
     3. database connection (done)
*/

const express = require("express");
const app = express();
const cors = require("cors");
const connectMongoDb = require("./configs/databaseConnection");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/authMiddleware");
const cookieParser = require("cookie-parser");
// const expressValidator = require("express-validator");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(errorHandler);

app.use(cors(require("./configs/corsOption.js")));
app.use(cookieParser());
app.use(express.json());
// app.use(expressValidator()); bug

app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/alumni", require("./routes/alumni"));
app.use("/admin", require("./routes/admin"));
app.use("/announcement", require("./routes/announcement"));
app.use("/survey", require("./routes/survey"));

app.use("*", (req, res) => {
    res.status(404).send({ message: "endpoint not found" });
});

connectMongoDb();

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
