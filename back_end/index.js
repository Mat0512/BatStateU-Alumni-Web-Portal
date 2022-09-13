//todo
/*
     1. routes/api endpoint of user registration and authentication
     2. middleware for jwt
     3. database connection (done)
*/

const express = require("express");
const app = express();
const connectMongoDb = require("./configs/databaseConnection");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(errorHandler);
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/auth", require("./routes/auth"));

app.use("/*", (req, res) => {
    res.status(404).send({ message: "endpoint not found" });
});

connectMongoDb();

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
