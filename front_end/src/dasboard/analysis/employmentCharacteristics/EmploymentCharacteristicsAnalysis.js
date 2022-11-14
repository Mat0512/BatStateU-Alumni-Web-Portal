import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import { useReducer, useEffect, useState } from "react";
import { EmploymentCharacteristicsChart } from "./EmploymentCharacteristicsChart";
import { employementCharacteristics } from "../../../dummy_data/cics2";

import {
    INITIAL_STATE,
    programsAndFieldStateReducer,
} from "../../../reducer/ProgramsAndFieldStateReducer";

const EmploymentCharacteristicsAnalysis = () => {
    console.log("rendered");
    const [state, dispatch] = useReducer(
        programsAndFieldStateReducer,
        INITIAL_STATE
    );
    const employmentCharacteristicsData = [...employementCharacteristics];
    const [checkboxInputs, setCheckboxInputs] = useState([]);

    // preparing/dynamically loading state for controlled checkbox input with loaded dataset
    useEffect(() => {
        // console.log("mounted");

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

    console.log("state: ", state);
    //filtering dataset for chart
    const filteredData =
        Object.keys(state.fields).length > 0
            ? filterByProgramAndkey(
                  employmentCharacteristicsData,
                  state,
                  "fields"
              )
            : [];

    // console.log("checkBox input: ", checkboxInputs);
    // console.log("filtered dataset: ", filteredData);
    console.log("\n\n\n\n\n\n\n\n");

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
