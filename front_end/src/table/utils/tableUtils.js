const getUniqueVal = (data, key) => {
    const accumultedUniqueVal = [];
    console.log("data param: ", data);
    console.log("data key: ", key);

    data.forEach((obj) => {
        console.log(accumultedUniqueVal);
        if (!accumultedUniqueVal.includes(obj[key])) {
            accumultedUniqueVal.push(obj[key]);
        }
    });

    console.log(accumultedUniqueVal);
    return accumultedUniqueVal;
};

export { getUniqueVal };
