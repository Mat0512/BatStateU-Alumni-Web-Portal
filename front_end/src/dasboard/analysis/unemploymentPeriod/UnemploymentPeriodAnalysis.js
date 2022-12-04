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
import { CubeContext, useCubeQuery } from "@cubejs-client/react";

const UnemploymentPeriodAnalysis = () => {
    const [state, dispatch] = useReducer(
        programsAndFieldStateReducer,
        INITIAL_STATE
    );
    const waitingTimeBeforeEmployedData = [...waitingTimeBeforeEmployed];
    const [checkboxInputs, setCheckboxInputs] = useState([]);
    const { resultSet, isLoading, error, progress } = useCubeQuery({
        measures: ["Trackingdatasets.count"],
        dimensions: [
            "Trackingdatasets.courseProgram",
            "Trackingdatasets.batchYearGraduated",
            "Trackingdatasets.reasonsOfUnemployment",
        ],
        order: {
            "Trackingdatasets.count": "desc",
        },
    });

    // preparing/dynamically loading state for controlled checkbox input with loaded dataset

    useEffect(() => {
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

    //filtering dataset for chart
    const filteredData =
        Object.keys(state.fields).length > 0
            ? filterByProgramAndkey(
                  waitingTimeBeforeEmployedData,
                  state,
                  "fields"
              )
            : [];

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            <VisualizationLayout name={`Waiting Time Before Employment`}>
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
                                label="Unemployment Length"
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
