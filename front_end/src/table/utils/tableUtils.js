const getUniqueVal = (data, key) => {
    const accumultedUniqueVal = [];

    data.forEach((obj) => {
        if (!accumultedUniqueVal.includes(obj[key])) {
            accumultedUniqueVal.push(obj[key]);
        }
    });

    return accumultedUniqueVal;
};

export { getUniqueVal };
