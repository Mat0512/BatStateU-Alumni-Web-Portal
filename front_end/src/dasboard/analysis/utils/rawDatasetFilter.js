const filterDataHelper = (dataset, state) => {
    return dataset.map((data) => {
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
    });
};

const filterGroupedBarStackByProgram = (dataset, state) => {
    return dataset.map((data) => {
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
    });
};

const filterByProgramAndkey = (dataset, state, key) => {
    console.log("dataset from filter: ", dataset);
    console.log("state from filter: ", state);
    console.log("key from filter: ", key);

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
    console.log("processed data: ", data);
    return data;
};

export { filterGroupedBarStackByProgram, filterByProgramAndkey };
