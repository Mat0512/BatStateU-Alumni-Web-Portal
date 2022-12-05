import { VisualizationLayout } from "../../components/VisualizationLayout";
import { FilterTab } from "../../components/FilterTab";
import { CheckboxInput } from "../../components/CheckBoxInput";
import { SelectionInput } from "../../components/SelectionInput";
import { filterByProgramAndkey } from "../utils/rawDatasetFilter";
import {
    INITIAL_STATE,
    careerFieldsReducer,
} from "../../../reducer/CareerFieldsAnalysisReducer";
import { careerFields } from "../../../dummy_data/cics2";
import { CareerFieldsChart } from "./CareerFieldsChart";
import { useContext, useReducer, useState, useEffect } from "react";
import { CubeContext, useCubeQuery } from "@cubejs-client/react";
import {
    aggregateCareerFieldsRawDataset,
    aggregateDataset,
} from "../utils/rawDatasetReducer";
import { generateCareersAnalysisStatement } from "../utils/descriptiveUtililies";

const CareerFieldsAnalysis = () => {
    const { cubejsApi } = useContext(CubeContext);
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [state, dispatch] = useReducer(careerFieldsReducer, INITIAL_STATE);
    const checkboxInputs = Object.keys(state.fields);
    const programInputs = Object.keys(state.programs);

    useEffect(() => {
        setisLoading(true);
        cubejsApi
            .load({
                measures: ["Trackingdatasets.count"],
                dimensions: [
                    "Trackingdatasets.currentNatureOfWorkProfessionField",
                    "Trackingdatasets.courseProgram",
                    "Trackingdatasets.batchYearGraduated",
                ],
                order: {
                    "Trackingdatasets.count": "desc",
                },
            })
            .then((res) => {
                console.log("res: ", res.loadResponses[0].data);
                console.log(
                    "filtered: ",
                    aggregateDataset({
                        fields: Object.keys(state.fields),
                        dataset: res.loadResponses[0].data,
                        fieldKey:
                            "Trackingdatasets.currentNatureOfWorkProfessionField",
                    })
                );
                setData(
                    aggregateDataset({
                        fields: Object.keys(state.fields),
                        dataset: res.loadResponses[0].data,
                        fieldKey:
                            "Trackingdatasets.currentNatureOfWorkProfessionField",
                    })
                );

                setisLoading(false);
            })
            .catch((err) => {
                alert(err);
                setisLoading(false);
            });
    }, []);

    const careerFieldsData = filterByProgramAndkey(data, state, "fields");
    console.log("filter: ", careerFieldsData);
    return (
        <>
            {isLoading ? (
                "Loading..."
            ) : data.length !== 0 ? (
                <>
                    <VisualizationLayout name="Career Fields">
                        <FilterTab>
                            <SelectionInput
                                label="program"
                                inputs={programInputs}
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
                    <div className="mt-3 font-poppins text-justify text-sm text-grey-400 ">
                        <hr className="text-grey-200 mb-2" />
                        {careerFieldsData.length &&
                            generateCareersAnalysisStatement(careerFieldsData)}
                    </div>
                </>
            ) : null}
        </>
    );
};

export { CareerFieldsAnalysis };
