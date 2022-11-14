import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { YearRangeInput } from "../../components/YearRangeInput";
import { barChartDatasetReducer } from "../utils/chartDatasetReducer";
import { horizontalBarChartOptions } from "../utils/chartOptions";

const EmploymentCharacteristicsChart = ({ dataset, state, dispatch }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    console.log("\n\n\n\n\n\n chart component rendered");
    console.log("dataset at employment types: ", dataset);
    console.log("dataset length:", dataset.length);

    const labels = dataset.length && Object.keys(dataset[0].values);
    console.log("labels: ", labels);
    const employmentCharacteristicsDataset =
        labels.length &&
        barChartDatasetReducer(
            labels,
            dataset,
            "Employment Characteristic Dataset"
        );

    console.log("filered: ", employmentCharacteristicsDataset);
    return (
        <div className="h-full grow flex flex-col justify-between">
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
                        labels: labels,
                        datasets: [employmentCharacteristicsDataset],
                    }}
                    options={horizontalBarChartOptions}
                ></Bar>
            )}
            <YearRangeInput
                yearList={[2017, 2018, 2019, 2020, 2021]}
                state={state}
                dispatch={dispatch}
            />
        </div>
    );
};

export { EmploymentCharacteristicsChart };
