import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { groupedBarChartOptions } from "../utils/chartOptions";
import { groupedBarChartDatasetReducer } from "../utils/chartDatasetReducer";

const StudyUsefullnessChart = ({ dataset }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const chartLabels = Object.keys(dataset[0].values);
    const datasetLabels = Object.keys(dataset[0].values[chartLabels[0]]);

    const wrapLabels = chartLabels.map((label) => {
        const matchedPattern = label.match(/[a-zA-Z]+ [a-zA-Z]+/gi);

        const splittedString = label
            .split(" ")
            .reduce((accumulatedString, word, index) => {
                let stringCopy = [...accumulatedString];

                if (index % 2 !== 0 && index !== 0) {
                    stringCopy[stringCopy.length - 1] = stringCopy[
                        stringCopy.length - 1
                    ].concat(` ${word}`);
                } else {
                    stringCopy.push(word);
                }
                return stringCopy;
            }, []);

        return splittedString;
    });

    const chartDataset = groupedBarChartDatasetReducer(
        dataset,
        chartLabels,
        datasetLabels
    );

    return (
        <div className="h-112 flex flex-col justify-between w-full lg:w-196">
            {Object.keys(dataset).length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    Loading..
                </div>
            ) : dataset.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    No Program Selected
                </div>
            ) : (
                <Bar
                    data={{
                        labels: wrapLabels,
                        datasets: chartDataset,
                    }}
                    options={groupedBarChartOptions}
                />
            )}
        </div>
    );
};

export { StudyUsefullnessChart };
