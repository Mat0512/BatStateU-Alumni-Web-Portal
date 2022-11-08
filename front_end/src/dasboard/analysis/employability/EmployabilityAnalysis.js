import { AnalysisHeader } from "../../components/AnalysisHeader";
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

const EmployabilityAnalysis = () => {
    const [state, dispatch] = useReducer(employabilityReducer, INITIAL_STATE);
    const employabilityData = [...employabilityV2];

    const filteredData = employabilityData
        .map((data) => {
            const newData = { ...data };
            const newEmployed = {};
            const newUnemployed = {};

            for (let key in data.employed) {
                if (key <= state.maxBatchYear) {
                    newEmployed[key] = data.employed[key];
                }
            }
            for (let key in data.unemployed) {
                if (key <= state.maxBatchYear) {
                    newUnemployed[key] = data.unemployed[key];
                }
            }

            return {
                ...newData,
                employed: newEmployed,
                unemployed: newUnemployed,
            };
        })
        .filter((data) => state.programs[data.program]);

    console.log("filtered data: ", filteredData);

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            <VisualizationLayout name="Employability Status of [College Name] Alumni">
                <FilterTab>
                    <CheckboxInput
                        label="program"
                        inputs={["Computer Science", "Information Technology"]}
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
        </div>
    );
};

export { EmployabilityAnalysis };
