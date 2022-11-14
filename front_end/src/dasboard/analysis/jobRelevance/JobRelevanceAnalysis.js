import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { useReducer } from "react";
import {
    employabilityReducer,
    INITIAL_STATE,
} from "../../../reducer/EmployabilityAnalysisReducer";
import { jobRelevance } from "../../../dummy_data/cics2";
import { useEffect } from "react";
import { JobRelevanceChart } from "./JobRelevanceChart";
import { filterGroupedBarStackByProgram } from "../utils/rawDatasetFilter";

const JobRelevanceAnalysis = () => {
    const [state, dispatch] = useReducer(employabilityReducer, INITIAL_STATE);
    const jobRelevanceData = [...jobRelevance];

    const filteredData = filterGroupedBarStackByProgram(
        jobRelevanceData,
        state
    );

    console.log("filtered data: ", filteredData);

    useEffect(() => {
        if (filteredData.length !== 0) {
            dispatch({
                type: "college",
                field: "college",
                value: filteredData[0]?.college || "",
            });
        }
    }, []);

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            <VisualizationLayout
                name={
                    state.isLoading
                        ? " "
                        : `Relevance of ${state.college} Alumni's Degree to Job`
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

                <JobRelevanceChart
                    state={state}
                    dispatch={dispatch}
                    dataset={filteredData}
                />
            </VisualizationLayout>
        </div>
    );
};

export { JobRelevanceAnalysis };
