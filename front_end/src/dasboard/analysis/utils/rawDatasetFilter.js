const filterGroupedBarStackByProgram = (dataset, state) => {
    return dataset
        .map((data) => {
            const newData = { ...data };
            const newValuesProp = {};

            for (let key in data.values) {
                newValuesProp[key] = {};
                for (let year in data.values[key]) {
                    if (year <= state.maxBatchYear) {
                        newValuesProp[key][year] = data.values[key][year];
                    }
                }
                newData.values = {
                    ...newData.values,
                    [key]: { ...newValuesProp[key] },
                };
            }

            return newData;
        })
        .filter((data) => state.programs[data.program]);
};

const filterByProgramAndkey = (dataset, state, key) => {
    const data = dataset
        .map((data) => {
            const newData = { ...data };
            const newFields = {};

            for (let fieldKey in data.values) {
                if (state.fields[fieldKey] == true) {
                    newFields[fieldKey] = {};
                    for (let yearKey in data.values[fieldKey]) {
                        if (yearKey <= state.maxBatchYear) {
                            newFields[fieldKey][yearKey] =
                                data.values[fieldKey][yearKey];
                        }
                    }
                }
            }

            return {
                ...newData,
                values: newFields,
            };
        })
        .filter((data) => data.program === state.selectedProgram);

    return data;
};

const filterByProgramAndKeysV2 = (dataset, state) => {
    const data = dataset
        .map((data) => {
            const newData = { ...data };
            const newFields = {};

            for (let fieldKey in data.values) {
                if (state.fields[fieldKey] == true) {
                    newFields[fieldKey] = {};
                    for (let fieldKeyChild in data.values[fieldKey]) {
                        newFields[fieldKey][fieldKeyChild] = {};
                        for (let yearKey in data.values[fieldKey][
                            fieldKeyChild
                        ]) {
                            if (yearKey <= state.maxBatchYear) {
                                newFields[fieldKey][fieldKeyChild][yearKey] =
                                    data.values[fieldKey][fieldKeyChild][
                                        yearKey
                                    ];
                            }
                        }
                    }
                }
            }

            return {
                ...newData,
                values: newFields,
            };
        })
        .filter((data) => data.program === state.selectedProgram);

    return data;
};

const filterByProgramAndYear = (dataset, state) => {
    const filteredDataset = dataset
        .map((data) => {
            const newData = {};
            for (let field in data.values) {
                newData[field] = {};
                for (let nestedField in data.values[field]) {
                    for (let year in data.values[field][nestedField])
                        if (year == state.selectedBatch) {
                            newData[field][nestedField] =
                                data.values[field][nestedField][year];
                        }
                }
            }

            return { ...data, values: newData };
        })
        .filter((data) => {
            return data.program == state.selectedProgram;
        });

    return filteredDataset;
};

export {
    filterGroupedBarStackByProgram,
    filterByProgramAndkey,
    filterByProgramAndKeysV2,
    filterByProgramAndYear,
};
