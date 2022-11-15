const colorPalette = {
    1: ["#003f5c"],

    2: ["#003f5c", "#ffa600"],
    3: ["#003f5c", "#bc5090", "#ffa600"],

    4: ["#003f5c", "#7a5195", "#ef5675", "#ffa600"],
    5: ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"],
    6: ["#003f5c", "#444e86", "#955196", "#dd5182", "#ff6e54", "#ffa600"],
    7: [
        "#003f5c",
        "#374c80",
        "#7a5195",
        "#bc5090",
        "#ef5675",
        "#ff764a",
        "#ffa600",
    ],

    13: [
        "#ECD078",
        "#D95B43",
        "#C02942",
        "#542437",
        "#53777A",
        "#DAD8A7",
        "#655643",
        "#607848",
        "#99B898",
        "#B576AD",
        "#67917A",
        "#2E2633",
        "#008C9E",
    ],
};

//this reducer is only used in vertical bar chart type
const groupedStackedBarDatasetReducer = (dataset) => {
    console.log("\n\n !!dataset: ", dataset);
    const topStackColor = "rgb(215,225,238)";
    const palleteCount = dataset.length > 7 ? 13 : dataset.length;

    const chartDataset = dataset.reduce(
        (accumulatedDataset, currentData, i) => {
            let accumulatedData = [];
            const datasetkeys = Object.keys(currentData.values);
            datasetkeys.forEach((key, index) => {
                accumulatedData = [...accumulatedData].concat({
                    label: `${currentData.program} - ${key}`,
                    data: Object.values(currentData.values[key]),
                    backgroundColor:
                        index === datasetkeys.length - 1
                            ? topStackColor
                            : colorPalette[palleteCount][i],
                    stack: `Stack ${i}`,
                });
            });

            return [...accumulatedDataset, ...accumulatedData];
        },
        []
    );

    return chartDataset;
};

const groupedBarChartDatasetReducer = (dataset, chartLabels, dataLabels) => {
    const palleteCount = chartLabels.length > 7 ? 13 : chartLabels.length;

    const chartDataset = dataLabels.map((label, index) => {
        return {
            label: label,
            data: chartLabels.map((chartLabel, i) => {
                return dataset[0].values[chartLabel][label];
            }),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: colorPalette[palleteCount][index],
            stack: `Stack ${index}`,
        };
    });
    return chartDataset;
};

//this reducer can be used on both vertical and horizontal bar chart EXCEPT GROUPED bar chart type
const barChartDatasetReducer = (dataLabels, dataset, datasetLabel) => {
    const paletteCount = dataLabels.length > 7 ? 13 : dataLabels.length;
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
            backgroundColor: colorPalette[paletteCount],
        }
    );
};

export {
    groupedStackedBarDatasetReducer,
    barChartDatasetReducer,
    groupedBarChartDatasetReducer,
};
