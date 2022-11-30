import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { SelectionInput } from "../../components/SelectionInput";
import { useReducer, useEffect, useState } from "react";
import { usefullnessOfStudies } from "../../../dummy_data/cics2";
import {
    INITIAL_STATE,
    programAndBatchReducer,
} from "../../../reducer/ProgramAndBatchReducer";

import { filterByProgramAndYear } from "../utils/rawDatasetFilter";
import { StudyUsefullnessChart } from "./StudyUsefullnessChart";

const StudyUsefullnessAnalysis = () => {
    const [state, dispatch] = useReducer(programAndBatchReducer, INITIAL_STATE);
    const usefullnessOfStudiesData = [...usefullnessOfStudies];

    // preparing/dynamically loading state for controlled checkbox input with loaded dataset
    useEffect(() => {
        const programsSelection = usefullnessOfStudiesData.map(
            (data) => data.program
        );
        const batchSelection = Object.keys(
            usefullnessOfStudiesData[0].values[
                "For finding an adequate job after finishing your studies"
            ]["Very Useful"]
        );

        dispatch({
            type: "loadStates",
            values: {
                programs: programsSelection,
                selectedProgram: programsSelection[0],
                batches: batchSelection,
                selectedBatch: batchSelection[0],
            },
        });
        dispatch({ type: "success" });
    }, []);

    //filtering dataset for chart
    const filteredData =
        Object.keys(state.programs).length > 0
            ? filterByProgramAndYear(usefullnessOfStudiesData, state)
            : [];

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            <VisualizationLayout
                name={
                    state.isLoading
                        ? " "
                        : "Usefulness of the Studies"
                    }
            >
                <FilterTab>
                    {Object.keys(state.programs).length === 0 ? (
                        "loading"
                    ) : (
                        <>
                            <SelectionInput
                                label="program"
                                inputs={state.programs}
                                value={state.selectedProgram}
                                handleChange={(e) =>
                                    dispatch({
                                        type: "field",
                                        field: "selectedProgram",
                                        value: e.target.value,
                                    })
                                }
                            />
                            <SelectionInput
                                label="batch"
                                inputs={state.batches}
                                value={state.selectedBatch}
                                handleChange={(e) =>
                                    dispatch({
                                        type: "field",
                                        field: "selectedBatch",
                                        value: e.target.value,
                                    })
                                }
                            />
                        </>
                    )}
                </FilterTab>

                {Object.keys(state.programs).length > 0 ? (
                    <StudyUsefullnessChart
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

export { StudyUsefullnessAnalysis };
