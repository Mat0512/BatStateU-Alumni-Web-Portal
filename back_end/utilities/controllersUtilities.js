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

//removes empty valued string properties from req.body
const removeEmptyProp = (obj) => {
    const updateObject = { ...obj };

    const keys = Object.keys(updateObject);
    keys.forEach((key) => {
        if (!updateObject[key]) {
            delete updateObject[key];
        }
    });

    return updateObject;
};

//converts the req.body as a dot notation object for $set operator
//$set operators requires to update nested property in dot notation

const formatUpdateData = (updateObj) => {
    const contactKeys = ["phone", "cellphone", "email"];
    const addressKeys = [
        "houseNumber",
        "building",
        "street",
        "city",
        "province",
        "country",
    ];

    console.log("type from format: ", updateObj);
    let queryString = "";
    const updateQuery = {};
    const updateKeys = Object.keys(updateObj);
    console.log("keys: ", updateKeys);

    updateKeys.forEach((key) => {
        if (contactKeys.includes(key)) {
            updateQuery[`contact.${key}`] = updateObj[key];
        } else if (addressKeys.includes(key)) {
            updateQuery[`address.${key}`] = updateObj[key];
        } else {
            updateQuery[key] = updateObj[key];
        }
    });
    console.log("Query string: ", queryString);

    return updateQuery;

    // const filteredKeys = Object.keys(updateObj);

    // filteredKeys.forEach((key) => {
    //     if (addressKeys.includes(key)) {
    //         filteredUpdate.address[key] = updateObj[key];
    //     } else if (contactKeys.includes(key)) {
    //         filteredUpdate.contact[key] = updateObj[key];
    //     } else {
    //         console.log("else: ", key);
    //         filteredUpdate[key] = updateObj[key];
    //     }
    // });
};

//removes empty string in objects
// const removeEmptyProp = (obj) => {
//     //checks type of the current property

//     console.log("from remove empty prop util, input: ", obj);
//     const properties = Object.keys(obj);
//     const newObj = { ...obj };

//     properties.forEach((prop) => {
//         if (newObj[prop] === "") {
//             delete newObj[prop];
//         }
//         //recursive call for object type
//         else {
//            //bug at if else
//             removeEmptyProp(newObj);
//         }
//     });

//     return newObj;
// };

let updateObjFormatter = (obj, prefix, result) => {
    result = result || {};
    for (let key of Object.keys(obj)) {
        let keyExpr = prefix ? `${prefix}.${key}` : `${key}`;
        if (typeof obj[key] === "object") {
            flatten(obj[key], keyExpr, result);
        } else {
            result[keyExpr] = obj[key];
        }
    }
    return result;
};

module.exports = {
    findMissingProp,
    updateObjFormatter,
    formatUpdateData,
    removeEmptyProp,
};
