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
import { options } from "./chartOptions";

const EmployabilityChart = ({ state, dispatch, dataset }) => {
    console.log("dataset: ", dataset);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const yearLabel = dataset.length && Object.keys(dataset[0].employed);
    const employmentDatasets =
        dataset.length &&
        dataset.reduce((accumulatedData, currentData, index) => {
            console.log("current data: ", Object.values(currentData.employed));
            const employed = {
                label: `${currentData.program} - Employed`,
                data: Object.values(currentData.employed),
                backgroundColor: "rgb(53, 162, 235)",
                stack: `Stack ${index}`,
            };
            const unemployed = {
                label: `${currentData.program} - Unemployed`,
                data: Object.values(currentData.unemployed),
                backgroundColor: "rgb(53, 162, 235)",
                stack: `Stack ${index}`,
            };

            return [...accumulatedData, employed, unemployed];
        }, []);
    console.log("!!labels: ", yearLabel);

    console.log("!!datasets: ", employmentDatasets);

    return (
        <div className="h-full grow flex flex-col justify-between">
            {dataset.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                    No Program Selected
                </div>
            ) : (
                <Bar
                    data={{
                        labels: yearLabel,
                        datasets: employmentDatasets,
                    }}
                    options={options}
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

export { EmployabilityChart };
