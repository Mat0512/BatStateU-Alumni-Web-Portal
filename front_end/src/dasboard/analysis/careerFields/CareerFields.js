import { CareerFieldsAnalysis } from "./CareerFieldsAnalysis";
import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";

const CareerFields = () => {
    const checkboxInputs = [
        "Architecture, Planning & Environmental Design",
        "Education",
        "International",
        "Arts & Entertainment",
        "Engineering & Computer Science",
        "Law & Public Policy",
        "Business",
        "Environment",
        "Science - Biological & Physical",
        "Communication",
        "Government",
        "Social Impact",
        "Health & Medicine",
    ];
    return (
        <VisualizationLayout name="Career Fields of [Program Name]">
            <FilterTab>
                <SelectionInput
                    label="program"
                    inputs={["Computer Science", "Information Technology"]}
                    //  value={state.program}
                    //  state={state}
                    //  dispatch={dispatch}
                />
                <CheckboxInput
                    label="Fields"
                    inputs={checkboxInputs}
                    //  value={state.program}
                    //  state={state}
                    //  dispatch={dispatch}
                />
            </FilterTab>
        </VisualizationLayout>
    );
};

export { CareerFields };
