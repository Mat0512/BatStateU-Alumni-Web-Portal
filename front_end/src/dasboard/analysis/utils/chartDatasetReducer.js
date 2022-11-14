//this reducer is only used in vertical bar chart type
const groupedStackedBarDatasetReducer = (dataset) => {
    const chartDataset = dataset.reduce((accumulatedDataset, currentData) => {
        let accumulatedData = [];
        const datasetkeys = Object.keys(currentData.values);
        datasetkeys.forEach((key, i) => {
            accumulatedData = [...accumulatedData].concat({
                label: `${currentData.program} - ${key}`,
                data: Object.values(currentData.values[key]),
                backgroundColor: "rgb(53, 162, 235)",
                stack: `Stack ${i}`,
            });
        });

        return [...accumulatedDataset, ...accumulatedData];
    }, []);

    return chartDataset;
};

//this reducer can be used on both vertical and horizontal bar chart EXCEPT GROUPED bar chart type
const barChartDatasetReducer = (dataLabels, dataset, datasetLabel) => {
    console.log("data labels: ", dataLabels);
    console.log("dataset at reducer: ", dataset);

    return dataLabels.reduce(
        (accumulatedData, fieldLabel) => {
            const fieldValueSum = Object.values(
                dataset[0].values[fieldLabel]
            ).reduce((sum, val) => sum + val, 0);

            return {
                ...accumulatedData,
                data: accumulatedData.data.concat(fieldValueSum),
            };
        },

        {
            label: datasetLabel,
            data: [],
        }
    );
};

export { groupedStackedBarDatasetReducer, barChartDatasetReducer };
