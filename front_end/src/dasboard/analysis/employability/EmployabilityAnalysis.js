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
                dispatch({
                    type: "college",
                    field: "college",
                    value: data[0]?.college || "",
                });
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

    const filteredData =
        data.length !== 0 ? filterGroupedBarStackByProgram(data, state) : [];

    console.log("filtered: ", filteredData);
    console.log("is loading? ", isLoading);

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            {isLoading ? (
                "Loading"
            ) : data.length === 0 ? null : (
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
            )}
        </div>
    );
};

export { EmployabilityAnalysis };
