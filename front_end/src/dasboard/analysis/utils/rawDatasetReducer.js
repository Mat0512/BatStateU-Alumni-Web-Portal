const cicsPrograms = [
    "Bachelor of Science in Information Technology",
    "Bachelor of Science in Computer Science",
];
const batches = [2017, 2018, 2019, 2020, 2021];

// const populateYearFieldsValues = (fields, dataset) => {
//     const values = {}
//     c
//     fields.forEach(field => {
//         values[fields] = {}
//         batches.forEach(batchYear => {
//             values[fields][year] = dataset
//         })

//     })
// }

const aggregateEmployabilityRawDataset = (dataset) => {
    let reducedData = [];
    cicsPrograms.forEach((program) => {
        // data template that will be updated and passed on top level reducedData var;
        const data = {
            college: "CICS",
            program: program,
            values: {
                employed: {
                    2017: 0,
                    2018: 0,
                    2019: 0,
                    2020: 0,
                    2021: 0,
                },
                unemployed: {
                    2017: 0,
                    2018: 0,
                    2019: 0,
                    2020: 0,
                    2021: 0,
                },
            },
        };
        //filtering dataset according to the current prorgram in loop
        const filteredProgramDataset = dataset.filter((data) => {
            return data["Trackingdatasets.courseProgram"] === program;
        });

        //extracts the employed response
        const employedDataset = filteredProgramDataset.filter(
            (data) =>
                data["Trackingdatasets.employmentStatus"] == "Employed" ||
                data["Trackingdatasets.employmentStatus"] == "Self-employed"
        );

        //extracts the unemployed response
        const unemployedDataset = filteredProgramDataset.filter(
            (data) => data["Trackingdatasets.employmentStatus"] == "Unemployed"
        );

        console.log("employed: ", employedDataset);
        console.log("unemployed: ", unemployedDataset);

        batches.forEach((year) => {
            data.values.employed[year] =
                data.values.employed[year] +
                employedDataset
                    .filter(
                        (data) =>
                            year === data["Trackingdatasets.batchYearGraduated"]
                    )
                    .reduce(
                        (accSumm, curr) =>
                            accSumm + curr["Trackingdatasets.count"],
                        0
                    );
        });

        //accumulates the sum of batch/year graduated responses of employed
        //feed in data.values.unemployed[year] field
        console.log("unemployedData: ", unemployedDataset);
        batches.forEach((year) => {
            console.log(
                `year ${year}: `,
                unemployedDataset.filter(
                    (data) =>
                        year === data["Trackingdatasets.batchYearGraduated"]
                )
            );
            const filteredDatasetByYear = unemployedDataset.filter(
                (data) => year === data["Trackingdatasets.batchYearGraduated"]
            );

            console.log("filtered year: ", filteredDatasetByYear);
            data.values.unemployed[year] =
                filteredDatasetByYear.length > 0
                    ? filteredDatasetByYear[0]["Trackingdatasets.count"]
                    : 0;
        });

        reducedData = reducedData.concat(data);
    });

    return reducedData;
};

const aggregateCareerFieldsRawDataset = (dataset) => {
    let reducedData = [];
    const fields = [
        "Architecture, Planning & Environmental Design",
        "Education",
        "International",
        "Arts & Entertainment",
        "Engineering & Computer Science",
        "Law & Public Policy",
        "Business",
        "Environment",
        "Science - Biological & Physical",
        "Communication",
        "Government",
        "Social Impact",
        "Health & Medicine",
    ];

    cicsPrograms.forEach((program) => {
        const data = {
            program: program,
            values: {},
        };

        const filteredProgramDataset = dataset.filter((data) => {
            return data["Trackingdatasets.courseProgram"] === program;
        });

        fields.forEach((field) => {
            data.values[field] = {};
            const filteredDatasetByField = filteredProgramDataset.filter(
                (data) =>
                    data[
                        "Trackingdatasets.currentNatureOfWorkProfessionField"
                    ] === field
            );

            batches.forEach((year) => {
                data.values[field][year] = filteredDatasetByField
                    .filter(
                        (data) =>
                            year === data["Trackingdatasets.batchYearGraduated"]
                    )
                    .reduce((accSumm, currData) => {
                        return accSumm + currData["Trackingdatasets.count"];
                    }, 0);
            });
        });
        return (reducedData = reducedData.concat(data));
    });

    return reducedData;
};

const aggregateDataset = ({ fields, dataset, fieldKey }) => {
    let reducedData = [];

    cicsPrograms.forEach((program) => {
        const data = {
            program: program,
            values: {},
        };

        const filteredProgramDataset = dataset.filter((data) => {
            return data["Trackingdatasets.courseProgram"] === program;
        });
        console.log("prog: ", filteredProgramDataset);

        fields.forEach((field) => {
            data.values[field] = {};

            const filteredDatasetByField = filteredProgramDataset.filter(
                (data) => {
                    // console.log("\n field: ", field);
                    // console.log("datafiltered", data[fieldKey]);

                    // console.log("data prog filtered", data[fieldKey] === field);
                    return data[fieldKey] === field;
                }
            );
            console.log("field ", filteredDatasetByField);

            batches.forEach((year) => {
                const filterByYearDataset = filteredDatasetByField.filter(
                    (data) => {
                        return (
                            year == data["Trackingdatasets.batchYearGraduated"]
                        );
                    }
                );

                data.values[field][year] =
                    filterByYearDataset.length == 0
                        ? 0
                        : filterByYearDataset[0]["Trackingdatasets.count"];
            });
        });
        return (reducedData = reducedData.concat(data));
    });

    return reducedData;
};

// const aggregateGroupedRawDataset = ({ fields, dataset }) => {
//     const dataset = [];

//     cicsPrograms.forEach((program) => {
//         const data = {
//             program: program,
//             values: {},
//         };
//         const filteredDatasetByProgram = dataset.filter(
//             (data) => data[1][program] == program
//         );
//         fields.forEach((field) => {
//             const filteredDatasetByField = filteredDatasetByProgram.filter(
//                 (data) => data[0] === field
//             );
//         });
//     });
// };

export {
    aggregateEmployabilityRawDataset,
    aggregateCareerFieldsRawDataset,
    aggregateDataset,
};
