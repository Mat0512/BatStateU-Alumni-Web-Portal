const corsAllowList = require("./corsAllowList");

const corsOption = {
    origin: function (origin, callback) {
        if (!origin || corsAllowList.includes(origin)) {
            console.log("origin: ", origin);
            callback(null, true);
        } else {
            callback("Not allowed by cors.");
        }
    },
    credentials: true,
};

module.exports = corsOption;
