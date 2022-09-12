//todo
/*
     1. routes/api endpoint of user registration and authentication
     2. middleware for jwt
     3. database connection (done)
*/

const express = require("express");
const app = express();
const connectMongoDb = require("./configs/databaseConnection");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use("/auth/alumni", (req, res) => {
    res.send("hello world");
});

connectMongoDb();

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
