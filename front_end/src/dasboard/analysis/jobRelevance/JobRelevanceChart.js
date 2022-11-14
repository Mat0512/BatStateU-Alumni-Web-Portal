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
import { YearRangeInput } from "../../components/YearRangeInput";
import { groupedBarChartOptions } from "../utils/chartOptions";
import { groupedStackedBarDatasetReducer } from "../utils/chartDatasetReducer";

const JobRelevanceChart = ({ state, dispatch, dataset }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    // years that was extracted are filtered outside this component
    const yearLabel = dataset.length && Object.keys(dataset[0].values.related);

    //consider extracting formatting data logic in utilities
    const jobRelevanceDataset =
        dataset.length && groupedStackedBarDatasetReducer(dataset);

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
                        labels: yearLabel,
                        datasets: jobRelevanceDataset,
                    }}
                    options={groupedBarChartOptions}
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

export { JobRelevanceChart };
