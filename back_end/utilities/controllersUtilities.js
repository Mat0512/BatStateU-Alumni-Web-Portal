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
    const contactKeys = ["phone", "email"];

    console.log("type from format: ", updateObj);
    let queryString = "";
    const updateQuery = {};
    const updateKeys = Object.keys(updateObj);
    console.log("keys: ", updateKeys);

    updateKeys.forEach((key) => {
        if (contactKeys.includes(key)) {
            updateQuery[`contact.${key}`] = updateObj[key];
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

//creates a query object that fields are like this:  "parentKey.childKey" : "value";
// this makes to query only with selected nested fields
const parseToNestedFieldQuery = (data) => {
    // removes empty value data on fields to avoid updating fields to have empty value
    const removeEmptyPropHelper = (rawData) => {
        const cleanedData = { ...rawData };
        for (key in cleanedData) {
            if (typeof cleanedData === "object") {
                for (nestedKey in cleanedData[key]) {
                    if (cleanedData[key][nestedKey] === "") {
                        delete cleanedData[key][nestedKey];
                    }
                }
            } else {
                if (cleanedData[key] === "") {
                    delete cleanedData[key][nestedKey];
                }
            }
        }

        return cleanedData;
    };

    let cleanedData = removeEmptyPropHelper(data);
    console.log("\n\n cleaned data: ", cleanedData);

    let parsedQuery = {};
    for (parentKey in cleanedData) {
        if (typeof cleanedData[parentKey] === "object") {
            for (let key in cleanedData[parentKey]) {
                parsedQuery[`${parentKey}.${key}`] =
                    cleanedData[parentKey][key];
            }
        } else {
            parsedQuery[parentKey] = cleanedData[parentKey];
        }
    }
    console.log("parsed: ", parsedQuery);
    return parsedQuery;
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

const matchCollege = (program) => {
    const colleges = {
        CICS: [
            "Bachelor of Science in Information Technology",
            "Bachelor of Science in Computer Science",
        ],
        CIT: [
            "Bachelor of Industrial Technology: Major in Automotive Technology",
            "Bachelor of Industrial Technology: Major in Civil Technology",
            "Bachelor of Industrial Technology: Major in Computer Technology",
            "Bachelor of Industrial Technology: Major in Drafting Technology",
            "Bachelor of Industrial Technology: Major in Electrical Technology",
            "Bachelor of Industrial Technology: Major in Food Technology",
            "Bachelor of Industrial Technology: Major in Computer Technology",
            "Bachelor of Industrial Technology: Major in Drafting Technology",
            "Bachelor of Industrial Technology: Major in Electrical Technology",
            "Bachelor of Industrial Technology: Major in Food Technology",
            "Bachelor of Industrial Technology: Major in Control Technology",
            "Bachelor of Industrial Technology: Major in Mechanical Technology",
            "Bachelor of Industrial Technology: Major in Mechatronics Technology",
            "Bachelor of Industrial Technology: Major in Welding and Fabrication Technology",
        ],
        CEAFA: [
            "Bachelor of Science in Chemical Engineering",
            "Bachelor of Science in Civil Engineering",
            "Bachelor of Science in Computer Engineering",
            "Bachelor of Science in Electrical Engineering",
            "Bachelor of Science in Electronics Engineering",
            "Bachelor of Science in Food Engineering",
            "Bachelor of Science in Industrial Engineering",
            "Bachelor of Science in Instrumentation & Control Engineering",
            "Bachelor of Science in Mechanical Engineering",
            "Bachelor of Science in Mechatronics Engineering",
            "Bachelor of Science in Petroleum Engineering",
            "Bachelor of Science in Sanitary Engineering",
            "Bachelor of Science in Automotive Engineering",
            "Bachelor of Science in Aerospace Engineering",
            "Bachelor of Science in Transportation Engineering",
            "Bachelor of Science in Biomedical Engineering",
            "Bachelor of Science in Geodetic Engineering",
            "Bachelor of Science in Geological Engineering",
            "Bachelor of Science in Ceramics Engineering",
            "Bachelor of Science in Metallurgical Engineering",
            "Bachelor of Science in Naval Architecture and Marine Engineering",
            "Bachelor of Science in Architecture",
            "Bachelor of Fine Arts and Design major in Visual Communication",
            "Bachelor of Science in Interior Design",
        ],
    };

    let college = "";

    for (key in colleges) {
        if (colleges[key].includes(program)) {
            college = key;
            break;
        }
    }

    return college;
};

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
    matchCollege,
    parseToNestedFieldQuery,
};
