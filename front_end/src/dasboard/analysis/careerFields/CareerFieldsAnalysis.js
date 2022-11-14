import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { useReducer } from "react";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import {
    INITIAL_STATE,
    careerFieldsReducer,
} from "../../../reducer/CareerFieldsAnalysisReducer";
import { careerFields } from "../../../dummy_data/cics2";
import { CareerFieldsChart } from "./CareerFieldsChart";

const CareerFieldsAnalysis = () => {
    const [state, dispatch] = useReducer(careerFieldsReducer, INITIAL_STATE);
    const checkboxInputs = Object.keys(careerFields[0].values);
    const careerFieldsData = filterByProgramAndkey(
        careerFields,
        state,
        "fields"
    );

    return (
        <VisualizationLayout name="Career Fields of [Program Name]">
            <FilterTab>
                <SelectionInput
                    label="program"
                    inputs={["Computer Science", "Information Technology"]}
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
                    label="Fields"
                    inputs={checkboxInputs}
                    value={state.fields}
                    selectionState={state.fields}
                    handleChange={(e) => {
                        dispatch({
                            type: "field",
                            field: e.target.id,
                            value: !state.fields[e.target.id],
                        });
                    }}
                />
            </FilterTab>
            <CareerFieldsChart
                state={state}
                dispatch={dispatch}
                dataset={careerFieldsData}
            />
        </VisualizationLayout>
    );
};

export { CareerFieldsAnalysis };
