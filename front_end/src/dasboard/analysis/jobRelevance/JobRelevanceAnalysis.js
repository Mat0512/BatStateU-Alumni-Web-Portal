import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import {
    employabilityReducer,
    INITIAL_STATE,
} from "../../../reducer/EmployabilityAnalysisReducer";
import { jobRelevance } from "../../../dummy_data/cics2";
import { JobRelevanceChart } from "./JobRelevanceChart";
import { filterGroupedBarStackByProgram } from "../utils/rawDatasetFilter";
import { CubeContext, useCubeQuery } from "@cubejs-client/react";
import { useReducer, useEffect, useState, useContext } from "react";
import { aggregateDataset } from "../utils/rawDatasetReducer";
import { generateJobRelevanceStatement } from "../utils/descriptiveUtililies";

const JobRelevanceAnalysis = () => {
    const [state, dispatch] = useReducer(employabilityReducer, INITIAL_STATE);
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState([]);
    const { cubejsApi } = useContext(CubeContext);
    const jobRelevanceData = [...jobRelevance];

    // useEffect(() => {
    //     setisLoading(true);
    //     cubejsApi
    //         .load({
    //             measures: ["Trackingdatasets.count"],
    //             dimensions: [
    //                 "Trackingdatasets.isYourCollegeDegreeRelevantToYourJob",
    //                 "Trackingdatasets.courseProgram",
    //                 "Trackingdatasets.batchYearGraduated",
    //             ],
    //             order: {
    //                 "Trackingdatasets.count": "desc",
    //             },
    //         })
    //         .then((res) => {
    //             setisLoading(true);
    //             console.log("res: ", res.loadResponses[0].data);

    //             setData(
    //                 aggregateDataset({
    //                     fields: ["Related", "Not Related"],
    //                     dataset: res.loadResponses[0].data,
    //                     fieldKey:
    //                         "Trackingdatasets.isYourCollegeDegreeRelevantToYourJob",
    //                 })
    //             );
    //             // const aggregatedEmployabilityData =
    //             //     aggregateEmployabilityRawDataset(res.loadResponses[0].data);
    //             // console.log("aggregated: ", aggregatedEmployabilityData);
    //             // setData(aggregatedEmployabilityData);
    //             setisLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             setisLoading(false);
    //         });
    // }, []);

    // const filteredData =
    //     data.length !== 0 ? filterGroupedBarStackByProgram(data, state) : [];

    const filteredData = filterGroupedBarStackByProgram(jobRelevance, state);
    console.log("jobRelevance : ", jobRelevance);
    console.log("jobRelevance state: ", state);

    console.log("jobRelevance filtered: ", filteredData);

    return (
        <div className="flex flex-col gap-3">
            {/* <AnalysisHeader /> */}
            {/* {isLoading ? (
                "Loading..."
            ) : data.length !== 0 ? (
                <>
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
                    <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                        <hr className="text-grey-200 mb-2" />
                        {generateJobRelevanceStatement(filteredData)}
                    </div>
                </>
            ) : null} */}
            <>
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
                {/* <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                    <hr className="text-grey-200 mb-2" />
                    {generateJobRelevanceStatement(filteredData)}
                </div> */}
            </>
        </div>
    );
};

export { JobRelevanceAnalysis };
