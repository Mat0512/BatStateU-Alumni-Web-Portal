const queryStringParser = (queryObject) => {
    console.log("query object: ", queryObject);
    let queryString = "";
    const keys = Object.keys(queryObject);

    keys.forEach((key) => {
        if (queryObject[key] !== "" && queryObject[key] !== "all") {
            console.log("key: ", key);

            console.log("condition 1: ", queryObject[key] !== "");
            console.log("condition 2: ", key !== "all");

            queryString = queryString.concat(
                `${queryString ? "&" : "?"}${key}=${queryObject[key]}`
            );
        }
    });
    return queryString;
};

export { queryStringParser };
