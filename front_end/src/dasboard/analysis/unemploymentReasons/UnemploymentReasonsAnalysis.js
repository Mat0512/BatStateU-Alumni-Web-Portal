import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import { useReducer, useEffect, useState } from "react";
import { reasonsOfUnemployment } from "../../../dummy_data/cics2";
import {
    INITIAL_STATE,
    programsAndFieldStateReducer,
} from "../../../reducer/ProgramsAndFieldStateReducer";
import { UnemploymentReasonsChart } from "./UnemploymentReasonsChart";

const UnemploymentReasonsAnalysis = () => {
    const [state, dispatch] = useReducer(
        programsAndFieldStateReducer,
        INITIAL_STATE
    );
    const reasonsOfUnemploymentData = [...reasonsOfUnemployment];
    const [checkboxInputs, setCheckboxInputs] = useState([]);

    // preparing/dynamically loading state for controlled checkbox input with loaded dataset
    useEffect(() => {
        const programsSelection = reasonsOfUnemploymentData.map(
            (data) => data.program
        );

        const fieldsState = {};
        for (let key in reasonsOfUnemploymentData[0].values) {
            fieldsState[key] = true;
        }

        setCheckboxInputs(Object.keys(reasonsOfUnemploymentData[0].values));

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

    //filtering dataset for chart
    const filteredData =
        Object.keys(state.fields).length > 0
            ? filterByProgramAndkey(reasonsOfUnemploymentData, state, "fields")
            : [];

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            <VisualizationLayout
                name={state.isLoading ? " " : "Unemployment Reasons"}
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
                                label="Unemployment Characteristics"
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
                    <UnemploymentReasonsChart
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

export { UnemploymentReasonsAnalysis };
