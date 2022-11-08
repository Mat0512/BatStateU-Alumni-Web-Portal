export const options = {
    plugins: {
        chartAreaBorder: {
            borderColor: "grey",
            borderWidth: 2,
            borderDash: [5, 5],
            borderDashOffset: 2,
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
