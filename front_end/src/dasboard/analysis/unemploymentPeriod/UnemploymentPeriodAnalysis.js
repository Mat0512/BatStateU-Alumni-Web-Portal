import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import { waitingTimeBeforeEmployed } from "../../../dummy_data/cics2";
import { UnemploymentPeriodChart } from "./UnempoymentPeriodChart";
import {
    INITIAL_STATE,
    programsAndFieldStateReducer,
} from "../../../reducer/ProgramsAndFieldStateReducer";
import { CubeContext, useCubeQuery } from "@cubejs-client/react";
import { useReducer, useEffect, useState, useContext } from "react";
import { aggregateDataset } from "../utils/rawDatasetReducer";
import { generateUnemploymentPeriodStatement } from "../utils/descriptiveUtililies";

const UnemploymentPeriodAnalysis = () => {
    const [state, dispatch] = useReducer(
        programsAndFieldStateReducer,
        INITIAL_STATE
    );
    const [checkboxInputs, setCheckboxInputs] = useState([]);
    const [data, setData] = useState([]);
    const { cubejsApi } = useContext(CubeContext);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        cubejsApi
            .load({
                measures: ["Trackingdatasets.count"],
                dimensions: [
                    "Trackingdatasets.courseProgram",
                    "Trackingdatasets.batchYearGraduated",
                    "Trackingdatasets.lengthOfTimeBeforeEmployment",
                ],
                order: {
                    "Trackingdatasets.count": "desc",
                },
            })
            .then((res) => {
                console.log("res: ", res.loadResponses[0].data);
                const aggregatedDataset = aggregateDataset({
                    fields: [
                        "Less than 1 month",
                        "1 - 6 months",
                        "7 - 11 months",
                        "1 year to less than 2 years",
                        "2 years to less than 3 years",
                        "3 years to less than 4 years",
                    ],
                    dataset: res.loadResponses[0].data,
                    fieldKey: "Trackingdatasets.lengthOfTimeBeforeEmployment",
                });

                setData(aggregatedDataset);

                const programsSelection = [
                    "Information Technology",
                    "Computer Science",
                ];
                const fieldsState = {};
                for (let key in aggregatedDataset[0].values) {
                    fieldsState[key] = true;
                }
                setCheckboxInputs(Object.keys(aggregatedDataset[0].values));
                dispatch({
                    type: "loadInputs",
                    value: {
                        fields: fieldsState,
                        programs: programsSelection,
                        selectedProgram: programsSelection[0],
                    },
                });
                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
                setisLoading(false);
            });
    }, []);

    //filtering dataset for chart
    console.log("length: ", data.length);
    console.log("state: ", state);
    const filteredData =
        data.length !== 0 ? filterByProgramAndkey(data, state, "fields") : [];

    console.log("filteredData ", filteredData);

    return (
        <div className="flex flex-col gap-3">
            {isLoading ? (
                "Loading..."
            ) : data.length !== 0 ? (
                <>
                    <VisualizationLayout
                        name={`Waiting Time Before Employment`}
                    >
                        <FilterTab>
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
                        </FilterTab>

                        <UnemploymentPeriodChart
                            dataset={filteredData}
                            state={state}
                            dispatch={dispatch}
                        />
                    </VisualizationLayout>
                    <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                        <hr className="text-grey-200 mb-2" />
                        {filteredData.length &&
                            generateUnemploymentPeriodStatement(
                                filteredData,
                                state.maxBatchYear
                            )}
                    </div>
                </>
            ) : null}
        </div>
    );
};

export { UnemploymentPeriodAnalysis };
