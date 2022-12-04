const cicsPrograms = [
    "Bachelor of Science in Information Technology",
    "Bachelor of Science in Computer Science",
];
const batches = [2017, 2018, 2019, 2020, 2021];

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

        //accumulates the sum of batch/year graduated responses of employed
        //feed in data.values.employed[year] field
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

        console.log(
            "emp: ",
            employedDataset.reduce((acc, curr) => {
                return acc + curr["Trackingdatasets.count"];
            }, 0)
        );

        //accumulates the sum of batch/year graduated responses of employed
        //feed in data.values.unemployed[year] field
        batches.forEach((year) => {
            console.log("unemployed: ", unemployedDataset);
            data.values.unemployed[year] =
                data.values.unemployed[year] +
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

        reducedData = reducedData.concat(data);
    });

    return reducedData;
};

export { aggregateEmployabilityRawDataset };
