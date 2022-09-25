const corsAllowList = require("./corsAllowList");

const corsOption = {
    origin: function (origin, callback) {
        console.log("origin: ", origin);
        if (!origin || corsAllowList.includes(origin)) {
            callback(null, true);
        } else {
            callback("Not allowed by cors.");
        }
    },
};

module.exports = corsOption;
