import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import { reasonsOfUnemployment } from "../../../dummy_data/cics2";
import {
    INITIAL_STATE,
    programsAndFieldStateReducer,
} from "../../../reducer/ProgramsAndFieldStateReducer";
import { UnemploymentReasonsChart } from "./UnemploymentReasonsChart";
import { CubeContext, useCubeQuery } from "@cubejs-client/react";
import { useReducer, useEffect, useState, useContext } from "react";
import { aggregateDataset } from "../utils/rawDatasetReducer";
import { generateCareersAnalysisStatement } from "../utils/descriptiveUtililies";

const UnemploymentReasonsAnalysis = () => {
    const [state, dispatch] = useReducer(
        programsAndFieldStateReducer,
        INITIAL_STATE
    );
    const reasonsOfUnemploymentData = [...reasonsOfUnemployment];
    const [checkboxInputs, setCheckboxInputs] = useState([]);
    const [data, setData] = useState([]);
    const { cubejsApi } = useContext(CubeContext);
    const [isLoading, setisLoading] = useState(false);

    // useEffect(() => {
    //     setisLoading(true);
    //     cubejsApi
    //         .load({
    //             measures: ["Trackingdatasets.count"],
    //             dimensions: [
    //                 "Trackingdatasets.courseProgram",
    //                 "Trackingdatasets.batchYearGraduated",
    //                 "Trackingdatasets.reasonsOfUnemployment",
    //             ],
    //             order: {
    //                 "Trackingdatasets.count": "desc",
    //             },
    //         })
    //         .then((res) => {
    //             console.log("res: ", res.loadResponses[0].data);
    //             const aggregatedDataset = aggregateDataset({
    //                 fields: [
    //                     "Further studies",
    //                     "Family concerns",
    //                     "Health related reasons",
    //                     "No job opportunity",
    //                     "Did not apply for a job yet",
    //                     "Qualifications did not fit job",
    //                     "Lack of work experience",
    //                 ],
    //                 dataset: res.loadResponses[0].data,
    //                 fieldKey: "Trackingdatasets.reasonsOfUnemployment",
    //             });
    //             setData(aggregatedDataset);
    //             const programsSelection = [
    //                 "Information Technology",
    //                 "Computer Science",
    //             ];

    //             const fieldsState = {};
    //             for (let key in aggregatedDataset[0].values) {
    //                 fieldsState[key] = true;
    //             }

    //             setCheckboxInputs(Object.keys(aggregatedDataset[0].values));

    //             dispatch({
    //                 type: "loadInputs",
    //                 value: {
    //                     fields: fieldsState,
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
        const programsSelection = [
            "Information Technology",
            "Computer Science",
        ];
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
    }, []);

    // const filteredData =
    //     data.length > 0 ? filterByProgramAndkey(data, state, "fields") : [];

    const filteredData = filterByProgramAndkey(
        reasonsOfUnemploymentData,
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
                    <VisualizationLayout name={"Unemployment Reasons"}>
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
                        </FilterTab>

                        <UnemploymentReasonsChart
                            state={state}
                            dispatch={dispatch}
                            dataset={filteredData}
                        />
                    </VisualizationLayout>
                    <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                        <hr className="text-grey-200 mb-2" />
                        {filteredData.length &&
                            generateCareersAnalysisStatement(filteredData)}
                    </div>
                </>
            ) : null} */}
            <VisualizationLayout name={"Unemployment Reasons"}>
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
                </FilterTab>

                <UnemploymentReasonsChart
                    state={state}
                    dispatch={dispatch}
                    dataset={filteredData}
                />
            </VisualizationLayout>
            <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                <hr className="text-grey-200 mb-2" />
                {filteredData.length &&
                    generateCareersAnalysisStatement(filteredData)}
            </div>
        </div>
    );
};

export { UnemploymentReasonsAnalysis };
