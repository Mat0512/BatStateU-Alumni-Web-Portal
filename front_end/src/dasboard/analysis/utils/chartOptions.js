const groupedBarChartOptions = {
    plugins: {
        title: {
            display: true,
            text: "Chart.js Bar Chart - Stacked",
        },
    },
    responsive: true,
    interaction: {
        mode: "index",
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const horizontalBarChartOptions = {
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: "right",
        },
    },
};

const verticalBarChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Bar Chart",
        },
    },
};

export {
    groupedBarChartOptions,
    horizontalBarChartOptions,
    verticalBarChartOptions,
};
