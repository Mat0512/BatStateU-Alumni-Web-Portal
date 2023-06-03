const express = require("express");
const app = express();
const cors = require("cors");
const connectMongoDb = require("./configs/databaseConnection.js");
const errorHandler = require("./middleware/errorHandler.js");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const PORT = process.env.PORT || 4001;

app.use(errorHandler);

app.use(cors(require("./configs/corsOption.js")));
app.use(cookieParser());
app.use(express.json());

app.use("/alumni", require("./routes/alumni.js"));
app.use("/admin", require("./routes/admin.js"));
app.use("/alumni-records", require("./routes/trackings/alumniInformations.js"));
app.use("/announcement", require("./routes/announcement.js"));
app.use("/survey", require("./routes/survey.js"));
app.use("/activitylog", require("./routes/activityLog.js"));
app.use("/signup", require("./routes/signup.js"));
app.use("/api/usernames", require("./routes/api/usernames.js"));
app.use("/cubejs", require("./routes/cubejsToken.js"));

app.use("*", (req, res) => {
    res.status(404).send({ message: "endpoint not found" });
});

connectMongoDb();

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
