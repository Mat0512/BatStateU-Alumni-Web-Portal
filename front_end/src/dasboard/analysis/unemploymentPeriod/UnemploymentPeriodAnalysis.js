import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import { useReducer, useEffect, useState } from "react";
import { waitingTimeBeforeEmployed } from "../../../dummy_data/cics2";
import { UnemploymentPeriodChart } from "./UnempoymentPeriodChart";
import {
    INITIAL_STATE,
    programsAndFieldStateReducer,
} from "../../../reducer/ProgramsAndFieldStateReducer";
const UnemploymentPeriodAnalysis = () => {
    const [state, dispatch] = useReducer(
        programsAndFieldStateReducer,
        INITIAL_STATE
    );
    const waitingTimeBeforeEmployedData = [...waitingTimeBeforeEmployed];
    const [checkboxInputs, setCheckboxInputs] = useState([]);

    console.log("Data: ", waitingTimeBeforeEmployedData);
    // preparing/dynamically loading state for controlled checkbox input with loaded dataset

    useEffect(() => {
        // console.log("mounted");
        const programsSelection = waitingTimeBeforeEmployedData.map(
            (data) => data.program
        );
        const fieldsState = {};
        for (let key in waitingTimeBeforeEmployedData[0].values) {
            fieldsState[key] = true;
        }
        setCheckboxInputs(Object.keys(waitingTimeBeforeEmployedData[0].values));
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
                  waitingTimeBeforeEmployedData,
                  state,
                  "fields"
              )
            : [];

    // console.log("checkBox input: ", checkboxInputs);
    console.log("filtered dataset: ", filteredData);
    console.log("\n\n\n\n\n\n\n\n");

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            <VisualizationLayout
                name={
                    state.isLoading
                        ? " "
                        : `Waiting Time Before Employment of ${
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
                    <UnemploymentPeriodChart
                        dataset={filteredData}
                        state={state}
                        dispatch={dispatch}
                    />
                ) : (
                    "loading..."
                )}
            </VisualizationLayout>
        </div>
    );
};

export { UnemploymentPeriodAnalysis };
