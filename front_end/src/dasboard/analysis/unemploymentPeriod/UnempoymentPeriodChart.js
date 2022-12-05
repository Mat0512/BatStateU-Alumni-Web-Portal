import { YearRangeInput } from "../../components/YearRangeInput";
import { verticalBarChartOptions } from "../utils/chartOptions";
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
import { barChartDatasetReducer } from "../utils/chartDatasetReducer";

const UnemploymentPeriodChart = ({ state, dispatch, dataset }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    console.log("dataset: ", dataset);

    const fieldLabels = dataset.length && Object.keys(dataset[0].values);
    const fieldDataset =
        fieldLabels.length &&
        barChartDatasetReducer(
            fieldLabels,
            dataset,
            "Alumni's Career Fields Dataset"
        );

    const wrapLabels =
        fieldLabels &&
        fieldLabels.map((label) => {
            // return label.length > 40 ? label.slice(0, 32).concat("...") : label;
            return label.replace("than", "than_").split("_");
        });

    return (
        <div className="h-112 flex flex-col justify-between w-full lg:w-196">
            {dataset.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    No Program Selected
                </div>
            ) : Object.keys(dataset).length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    Loading...
                </div>
            ) : (
                <Bar
                    data={{
                        labels: wrapLabels,
                        datasets: [fieldDataset],
                    }}
                    options={verticalBarChartOptions}
                />
            )}
            <YearRangeInput
                yearList={[2017, 2018, 2019, 2020, 2021]}
                state={state}
                dispatch={dispatch}
            />
        </div>
    );
};

export { UnemploymentPeriodChart };
