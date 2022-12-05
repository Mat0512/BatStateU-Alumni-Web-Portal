import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { EmployabilityChart } from "./EmployabilityChart";
import { useReducer } from "react";
import {
    employabilityReducer,
    INITIAL_STATE,
} from "../../../reducer/EmployabilityAnalysisReducer";
import { employabilityV2 } from "../../../dummy_data/cics2";
import { useEffect, useState, useContext } from "react";
import { filterGroupedBarStackByProgram } from "../utils/rawDatasetFilter";
import { CubeContext, useCubeQuery } from "@cubejs-client/react";
import { cubeQuery } from "../utils/cubeQueries";
import { aggregateEmployabilityRawDataset } from "../utils/rawDatasetReducer";
import { generateEmployabilityStatement } from "../utils/descriptiveUtililies";

const EmployabilityAnalysis = () => {
    const [state, dispatch] = useReducer(employabilityReducer, INITIAL_STATE);
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState([]);
    const { cubejsApi } = useContext(CubeContext);

    useEffect(() => {
        setisLoading(true);
        cubejsApi
            .load({
                measures: ["Trackingdatasets.count"],
                dimensions: [
                    "Trackingdatasets.courseProgram",
                    "Trackingdatasets.batchYearGraduated",
                    "Trackingdatasets.employmentStatus",
                ],
                order: {
                    "Trackingdatasets.count": "desc",
                },
            })
            .then((res) => {
                console.log("res: ", res.loadResponses[0].data);
                const aggregatedEmployabilityData =
                    aggregateEmployabilityRawDataset(res.loadResponses[0].data);
                console.log("aggregated: ", aggregatedEmployabilityData);
                setData(aggregatedEmployabilityData);
                setisLoading(false);
            })
            .catch((err) => {
                alert(err);
                setisLoading(false);
            });
    }, []);

    // if (resultSet) {
    //     console.log("invoked");
    //     console.log(
    //         "filtered",
    //         aggregateEmployabilityRawDataset(resultSet.loadResponses[0].data)
    //     );
    // }

    // filters dataset every re-render caused by state reducer
    console.log("has data?: ", data.length !== 0);
    console.log("state: ", state);
    console.log("data: ", data);

    const filteredData =
        data.length !== 0 ? filterGroupedBarStackByProgram(data, state) : [];

    console.log("datastet, ", data);
    console.log("filtered: ", filteredData);

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            {isLoading ? (
                "Loading"
            ) : data.length === 0 ? null : (
                <>
                    <VisualizationLayout
                        name={
                            state.isLoading
                                ? " "
                                : `Employability Status of ${state.college} Alumni`
                        }
                    >
                        <FilterTab>
                            <CheckboxInput
                                label="program"
                                inputs={Object.keys(state.programs)}
                                name="program-employability"
                                value={state.programs}
                                selectionState={state.programs}
                                handleChange={(e) => {
                                    dispatch({
                                        type: "program",
                                        field: e.target.id,
                                        value: !state.programs[e.target.id],
                                    });
                                }}
                            />
                        </FilterTab>

                        <EmployabilityChart
                            state={state}
                            dispatch={dispatch}
                            dataset={filteredData}
                        />
                    </VisualizationLayout>
                    <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                        <hr className="text-grey-200 mb-2" />
                        {generateEmployabilityStatement(
                            filteredData,
                            state.maxBatchYear
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export { EmployabilityAnalysis };
