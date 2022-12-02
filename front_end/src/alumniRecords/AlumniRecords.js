import { FilterSection } from "./FilterSection";
import { AlumniRecordsTable } from "./AlumniRecordsTable";
import {
    alumniRecordReucer,
    INITIAL_STATE,
} from "../reducer/AlumniRecordsReducer";
import { useReducer } from "react";
import { useFectchAlumniInformation } from "../hooks/useFetchAlumniInformation";

const AlumniRecords = () => {
    const [state, dispatch] = useReducer(alumniRecordReucer, INITIAL_STATE);
    const data = useFectchAlumniInformation(state, dispatch);

    console.log("data: ", data);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-poppins text-3xl text-grey-400">
                Alumni Records
            </h1>
            <FilterSection data={data} state={state} dispatch={dispatch} />
            <AlumniRecordsTable data={data} state={state} dispatch={dispatch} />
        </div>
    );
};

export { AlumniRecords };
