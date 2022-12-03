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

const EmployabilityAnalysis = () => {
    const [state, dispatch] = useReducer(employabilityReducer, INITIAL_STATE);
    const [filteredData, setFilteredData] = useState([]);
    const employabilityData = [...employabilityV2];
    const { cubejsApi } = useContext(CubeContext);
    const { resultSet, isLoading, error, progress } = useCubeQuery(cubeQuery, {
        cubejsApi: cubejsApi,
    });

    console.log("cube api ", cubejsApi);
    useEffect(() => {
        //remodel dataset here
        // const filteredData = filterGroupedBarStackByProgram(
        //     employabilityData,
        //     state
        // );
        setFilteredData(resultSet);
    }, [resultSet]);

    useEffect(() => {
        dispatch({
            type: "college",
            field: "college",
            value: filteredData[0]?.college || "",
        });
    }, []);

    console.log("data at analysis filtered: ", filteredData);

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            {isLoading ? (
                <div>{progress?.stage || "Loading..."}</div>
            ) : error ? (
                <div>{error.toString()}</div>
            ) : !resultSet || filteredData.length < 0 ? null : (
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
