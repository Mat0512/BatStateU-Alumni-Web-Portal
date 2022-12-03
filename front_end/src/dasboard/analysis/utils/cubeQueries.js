const cubeQuery = {
    employabilityStatus: {
        dimensions: [
            "Trackingdatasets.courseProgram",
            "Trackingdatasets.batchYearGraduated",
            "Trackingdatasets.currentNatureOfWorkProfessionField",
        ],
        measures: ["Trackingdatasets.count"],
    },
};

export { cubeQuery };
