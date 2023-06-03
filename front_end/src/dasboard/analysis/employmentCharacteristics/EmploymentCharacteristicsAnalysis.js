import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import { EmploymentCharacteristicsChart } from "./EmploymentCharacteristicsChart";
import { employementCharacteristics } from "../../../dummy_data/cics2";
import { CubeContext, useCubeQuery } from "@cubejs-client/react";
import { useReducer, useEffect, useState, useContext } from "react";
import { aggregateDataset } from "../utils/rawDatasetReducer";

import {
    INITIAL_STATE,
    programsAndFieldStateReducer,
} from "../../../reducer/ProgramsAndFieldStateReducer";
import { generateEmploymentTypeStatement } from "../utils/descriptiveUtililies";

const EmploymentCharacteristicsAnalysis = () => {
    const [state, dispatch] = useReducer(
        programsAndFieldStateReducer,
        INITIAL_STATE
    );
    const [data, setData] = useState([]);
    const { cubejsApi } = useContext(CubeContext);
    const [isLoading, setisLoading] = useState(false);
    const employmentCharacteristicsData = [...employementCharacteristics];

    // const [checkboxInputs, setCheckboxInputs] = useState([]);
    const stateFields = [
        "Regular/Permanent",
        "Temporary",
        "Casual",
        "Contractual",
        "N/A",
    ];
    const programsSelection = ["Information Technology", "Computer Science"];

    // useEffect(() => {
    //     setisLoading(true);
    //     cubejsApi
    //         .load({
    //             measures: ["Trackingdatasets.count"],
    //             dimensions: [
    //                 "Trackingdatasets.courseProgram",
    //                 "Trackingdatasets.batchYearGraduated",
    //                 "Trackingdatasets.employmentCharacteristic",
    //             ],
    //             order: {
    //                 "Trackingdatasets.count": "desc",
    //             },
    //         })
    //         .then((res) => {
    //             setData(
    //                 aggregateDataset({
    //                     fields: stateFields,
    //                     dataset: res.loadResponses[0].data,
    //                     fieldKey: "Trackingdatasets.employmentCharacteristic",
    //                 })
    //             );
    //             dispatch({
    //                 type: "loadInputs",
    //                 value: {
    //                     fields: {
    //                         "Regular/Permanent": true,
    //                         Temporary: true,
    //                         Casual: true,
    //                         Contractual: true,
    //                         "N/A": true,
    //                     },
    //                     programs: programsSelection,
    //                     selectedProgram: programsSelection[0],
    //                 },
    //             });
    //             setisLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setisLoading(false);
    //         });
    // }, []);
    useEffect(() => {
        dispatch({
            type: "loadInputs",
            value: {
                fields: {
                    "Regular/Permanent": true,
                    Temporary: true,
                    Casual: true,
                    Contractual: true,
                    "N/A": true,
                },
                programs: programsSelection,
                selectedProgram: programsSelection[0],
            },
        });
    }, []);

    //filtering dataset for chart
    const filteredData =
        data.length !== 0
            ? filterByProgramAndkey(data, state, "fields")
            : filterByProgramAndkey(
                  employmentCharacteristicsData,
                  state,
                  "fields"
              );
    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}

            {/* {isLoading ? (
                "Loading..."
            ) : data.length !== 0 ? (
                <>
                    <VisualizationLayout
                        name={`Employment Types of ${
                            !state.college ? "" : state.college
                        } Alumni`}
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
                                        inputs={stateFields}
                                        value={state.fields}
                                        handleChange={(e) =>
                                            dispatch({
                                                type: "field",
                                                field: e.target.id,
                                                value: !state.fields[
                                                    e.target.id
                                                ],
                                            })
                                        }
                                    />
                                </>
                            )}
                        </FilterTab>

                        <EmploymentCharacteristicsChart
                            state={state}
                            dispatch={dispatch}
                            dataset={filteredData}
                        />
                    </VisualizationLayout>
                    <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                        <hr className="text-grey-200 mb-2" />
                        {filteredData.length &&
                            generateEmploymentTypeStatement(filteredData)}
                    </div>
                </>
            ) : null} */}

            <>
                <VisualizationLayout
                    name={`Employment Types of ${
                        !state.college ? "" : state.college
                    } Alumni`}
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
                                    inputs={stateFields}
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

                    <EmploymentCharacteristicsChart
                        state={state}
                        dispatch={dispatch}
                        dataset={filteredData}
                    />
                </VisualizationLayout>
                <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                    <hr className="text-grey-200 mb-2" />
                    {filteredData.length &&
                        generateEmploymentTypeStatement(filteredData)}
                </div>
            </>
        </div>
    );
};

export { EmploymentCharacteristicsAnalysis };
