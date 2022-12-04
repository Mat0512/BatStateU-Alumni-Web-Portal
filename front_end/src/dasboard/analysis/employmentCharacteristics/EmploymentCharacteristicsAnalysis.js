import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import { useReducer, useEffect, useState } from "react";
import { EmploymentCharacteristicsChart } from "./EmploymentCharacteristicsChart";
import { employementCharacteristics } from "../../../dummy_data/cics2";
import { CubeContext, useCubeQuery } from "@cubejs-client/react";

import {
    INITIAL_STATE,
    programsAndFieldStateReducer,
} from "../../../reducer/ProgramsAndFieldStateReducer";

const EmploymentCharacteristicsAnalysis = () => {
    const [state, dispatch] = useReducer(
        programsAndFieldStateReducer,
        INITIAL_STATE
    );
    const employmentCharacteristicsData = [...employementCharacteristics];
    const [checkboxInputs, setCheckboxInputs] = useState([]);
    const { resultSet, isLoading, error, progress } = useCubeQuery({
        measures: ["Trackingdatasets.count"],
        dimensions: [
            "Trackingdatasets.courseProgram",
            "Trackingdatasets.batchYearGraduated",
            "Trackingdatasets.employmentCharacteristic",
        ],
        order: {
            "Trackingdatasets.count": "desc",
        },
    });

    // preparing/dynamically loading state for controlled checkbox input with loaded dataset
    useEffect(() => {
        const programsSelection = employmentCharacteristicsData.map(
            (data) => data.program
        );

        const fieldsState = {};
        for (let key in employmentCharacteristicsData[0].values) {
            fieldsState[key] = true;
        }

        setCheckboxInputs(Object.keys(employmentCharacteristicsData[0].values));

        dispatch({
            type: "loadInputs",
            value: {
                fields: fieldsState,
                programs: programsSelection,
                selectedProgram: programsSelection[0],
            },
        });
        dispatch({ type: "success" });
    }, []);

    if (isLoading) {
        return (
            <div>
                {(progress && progress.stage && progress.stage.stage) ||
                    "Loading..."}
            </div>
        );
    }

    if (error) {
        return <div>{error.toString()}</div>;
    }

    if (!resultSet) {
        console.log(true);
        return null;
    }

    if (resultSet) {
        //aggregate  dataset here
        console.log("result: ", resultSet);
    }

    //filtering dataset for chart
    const filteredData =
        Object.keys(state.fields).length > 0
            ? filterByProgramAndkey(
                  employmentCharacteristicsData,
                  state,
                  "fields"
              )
            : [];

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            <VisualizationLayout
                name={
                    state.isLoading
                        ? " "
                        : `Employment Types of ${
                              !state.college ? "" : state.college
                          } Alumni`
                }
            >
                <FilterTab>
                    {Object.keys(state.fields).length === 0 ? (
                        "loading"
                    ) : (
                        <>
                            <SelectionInput
                                label="program"
                                inputs={state.programs}
                                value={state.selectedProgram}
                                handleChange={(e) =>
                                    dispatch({
                                        type: "select",
                                        field: "selectedProgram",
                                        value: e.target.value,
                                    })
                                }
                            />
                            <CheckboxInput
                                label="Employment Characteristics"
                                inputs={checkboxInputs}
                                value={state.fields}
                                handleChange={(e) =>
                                    dispatch({
                                        type: "field",
                                        field: e.target.id,
                                        value: !state.fields[e.target.id],
                                    })
                                }
                            />
                        </>
                    )}
                </FilterTab>

                {Object.keys(state.fields).length > 0 ? (
                    <EmploymentCharacteristicsChart
                        state={state}
                        dispatch={dispatch}
                        dataset={filteredData}
                    />
                ) : (
                    "loading..."
                )}
            </VisualizationLayout>
        </div>
    );
};

export { EmploymentCharacteristicsAnalysis };
