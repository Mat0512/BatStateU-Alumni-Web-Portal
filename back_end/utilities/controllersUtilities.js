const findMissingProp = (keyArray, requestBody) => {
    const missingKeys = [];
    console.log("requestBody: ", requestBody);
    keyArray.forEach((key) => {
        if (!(key in requestBody)) {
            console.log("Incomplete key: ", key);
            missingKeys.push(key);
        } else {
            return null;
        }
    });

    return missingKeys;
};

const alumniUpdateFormatter = (keys, updateObj) => {
    //filter keys with null value
    //append props with non value keys

    const updateData = {
        address: {},
        contacts: {},
    };

    const filteredKeys = keys.filter((key) => updateObj[key]);
};

module.exports = { findMissingProp };
