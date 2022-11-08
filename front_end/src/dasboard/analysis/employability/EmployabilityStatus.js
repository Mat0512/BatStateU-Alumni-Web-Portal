import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { EmployabilityChart } from "./EmployabilityChart";

const EmployabilityStatus = ({ state, dispatch, data }) => {
    console.log("state at child: ", state);

    return (
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
                dataset={data}
            />
        </VisualizationLayout>
    );
};

export { EmployabilityStatus };
