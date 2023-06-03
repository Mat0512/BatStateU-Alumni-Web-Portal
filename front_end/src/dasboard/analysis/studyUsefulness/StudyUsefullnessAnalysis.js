import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { SelectionInput } from "../../components/SelectionInput";
import { useReducer, useEffect, useState, useContext } from "react";
import { usefullnessOfStudies } from "../../../dummy_data/cics2";
import {
    INITIAL_STATE,
    programAndBatchReducer,
} from "../../../reducer/ProgramAndBatchReducer";

import { filterByProgramAndYear } from "../utils/rawDatasetFilter";
import { StudyUsefullnessChart } from "./StudyUsefullnessChart";
import { CubeContext, useCubeQuery } from "@cubejs-client/react";
import { aggregateDataset } from "../utils/rawDatasetReducer";

const StudyUsefullnessAnalysis = () => {
    const [state, dispatch] = useReducer(programAndBatchReducer, INITIAL_STATE);
    const { cubejsApi } = useContext(CubeContext);
    const usefullnessOfStudiesData = [...usefullnessOfStudies];
    const fields = [
        "Very useful",
        "Useful",
        "Fairly useful",
        "Not useful",
        "Not Useful at all",
    ];
    const labels = [
        "For finding an adequate job after finishing your studies",
        "For the development of your personality",
        "For the economic development of your country",
        "For your future professional development/career",
        "For finding an adequate job after finishing your studies",
    ];
    const [loading, setisLoading] = useState(false);
    const [groupedDataset, setGroupedDataset] = useState([]);

    const { resultSet, isLoading, error, progress } = useCubeQuery({
        dimensions: [
            "Trackingdatasets.currentNatureOfWorkProfessionField",
            "Trackingdatasets.batchYearGraduated",
            "Trackingdatasets.courseProgram",
        ],
        order: {
            "Trackingdatasets.count": "desc",
        },
        measures: ["Trackingdatasets.count"],
    });

    useEffect(() => {
        setisLoading(true);
        cubejsApi
            .load({
                measures: ["Trackingdatasets.count"],
                dimensions: [
                    "Trackingdatasets.courseProgram",
                    "Trackingdatasets.batchYearGraduated",
                    "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForFindingAnAdequateJobAfterFinishingYourStudies",
                ],
                order: {
                    "Trackingdatasets.count": "desc",
                },
            })
            .then((res) => {
                console.log("res: ", res.loadResponses[0].data);
                const aggregatedDataset = aggregateDataset({
                    fields: fields,
                    dataset: res.loadResponses[0].data,
                    fieldKey:
                        "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForFindingAnAdequateJobAfterFinishingYourStudies",
                });
                console.log("aggregate: ", aggregatedDataset);
                setGroupedDataset([
                    ...groupedDataset,
                    [
                        "For finding an adequate job after finishing your studies",
                        ...aggregatedDataset,
                    ],
                ]);

                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setisLoading(false);
            });
    }, []);

    useEffect(() => {
        setisLoading(true);
        cubejsApi
            .load({
                measures: ["Trackingdatasets.count"],
                dimensions: [
                    "Trackingdatasets.courseProgram",
                    "Trackingdatasets.batchYearGraduated",
                    "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForTheDevelopmentOfYourPersonality",
                ],
                order: {
                    "Trackingdatasets.count": "desc",
                },
            })
            .then((res) => {
                console.log("res: ", res.loadResponses[0].data);
                const aggregatedDataset = aggregateDataset({
                    fields: fields,
                    dataset: res.loadResponses[0].data,
                    fieldKey:
                        "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForTheDevelopmentOfYourPersonality",
                });
                console.log("aggregate: ", aggregatedDataset);
                setGroupedDataset([
                    ...groupedDataset,
                    [
                        "For the development of your personality",
                        ...aggregatedDataset,
                    ],
                ]);

                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
                setisLoading(false);
            });
    }, []);

    useEffect(() => {
        setisLoading(true);
        cubejsApi
            .load({
                measures: ["Trackingdatasets.count"],
                dimensions: [
                    "Trackingdatasets.courseProgram",
                    "Trackingdatasets.batchYearGraduated",
                    "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForTheEconomicDevelopmentOfYourCountry",
                ],
                order: {
                    "Trackingdatasets.count": "desc",
                },
            })
            .then((res) => {
                console.log("res: ", res.loadResponses[0].data);
                const aggregatedDataset = aggregateDataset({
                    fields: fields,
                    dataset: res.loadResponses[0].data,
                    fieldKey:
                        "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForTheEconomicDevelopmentOfYourCountry",
                });
                console.log("aggregate: ", aggregatedDataset);
                setGroupedDataset([
                    ...groupedDataset,
                    [
                        "For the economic development of your country",
                        ...aggregatedDataset,
                    ],
                ]);

                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
                setisLoading(false);
            });
    }, []);
    useEffect(() => {
        setisLoading(true);
        cubejsApi
            .load({
                measures: ["Trackingdatasets.count"],
                dimensions: [
                    "Trackingdatasets.courseProgram",
                    "Trackingdatasets.batchYearGraduated",
                    "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForYourFutureProfessionalDevelopmentCareer",
                ],
                order: {
                    "Trackingdatasets.count": "desc",
                },
            })
            .then((res) => {
                console.log("res: ", res.loadResponses[0].data);
                const aggregatedDataset = aggregateDataset({
                    fields: fields,
                    dataset: res.loadResponses[0].data,
                    fieldKey:
                        "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForYourFutureProfessionalDevelopmentCareer",
                });
                console.log("aggregate: ", aggregatedDataset);
                setGroupedDataset([
                    ...groupedDataset,
                    [
                        "For your future professional development/career",
                        ...aggregatedDataset,
                    ],
                ]);

                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
                setisLoading(false);
            });
    }, []);

    useEffect(() => {
        setisLoading(true);
        cubejsApi
            .load({
                measures: ["Trackingdatasets.count"],
                dimensions: [
                    "Trackingdatasets.courseProgram",
                    "Trackingdatasets.batchYearGraduated",
                    "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForFulfillingYourPresentProfessionalTasksIfApplicable",
                ],
                order: {
                    "Trackingdatasets.count": "desc",
                },
            })
            .then((res) => {
                console.log("res: ", res.loadResponses[0].data);
                const aggregatedDataset = aggregateDataset({
                    fields: fields,
                    dataset: res.loadResponses[0].data,
                    fieldKey:
                        "Trackingdatasets.overallHowWouldYouRateTheUsefulnessOfYourStudiesForFulfillingYourPresentProfessionalTasksIfApplicable",
                });
                console.log("aggregate: ", aggregatedDataset);
                setGroupedDataset([
                    ...groupedDataset,
                    [
                        "For finding an adequate job after finishing your studies",
                        ...aggregatedDataset,
                    ],
                ]);

                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                alert(err);
                setisLoading(false);
            });
    }, []);

    //preparing/dynamically loading state for controlled checkbox input with loaded dataset
    // useEffect(() => {
    //     const programsSelection = usefullnessOfStudiesData.map(
    //         (data) => data.program
    //     );
    //     const batchSelection = Object.keys(
    //         usefullnessOfStudiesData[0].values[
    //             "For finding an adequate job after finishing your studies"
    //         ]["Very Useful"]
    //     );

    //     dispatch({
    //         type: "loadStates",
    //         values: {
    //             programs: programsSelection,
    //             selectedProgram: programsSelection[0],
    //             batches: batchSelection,
    //             selectedBatch: batchSelection[0],
    //         },
    //     });
    //     dispatch({ type: "success" });
    // }, []);

    //filtering dataset for chart

    console.log("grp:  ", groupedDataset);
    const filteredData =
        Object.keys(state.programs).length > 0
            ? filterByProgramAndYear(usefullnessOfStudiesData, state)
            : [];

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            {/* <VisualizationLayout
                name={state.isLoading ? " " : "Usefulness of the Studies"}
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
            </VisualizationLayout> */}
        </div>
    );
};

export { StudyUsefullnessAnalysis };
