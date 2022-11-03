import { SelectInput } from "../table/InputTypes";
import SearchBar from "../search_bar/SearchBar";
import { useReducer } from "react";
import {
    INITIAL_STATE,
    alumniRecordReucer,
} from "../reducer/AlumniRecordsReducer";
import { getUniqueVal } from "../table/utils/tableUtils";

const dummy = [
    {
        srCode: "19-01100",
        name: "name name",
        program: "Information Technology",
        major: "major ",
        batch: "2022",
    },
    {
        srCode: "19-00011",
        name: "name name",
        program: "Computer Science",
        major: "major ",
        batch: "2022",
    },
    {
        srCode: "19-01100",
        name: "name name",
        program: "Electrical Engineering",
        major: "major ",
        batch: "2014",
    },
    {
        srCode: "19-1200",
        name: "name name",
        program: "Computer Engineering",
        major: "major ",
        batch: "2011",
    },
    {
        srCode: "19-00200",
        name: "name name",
        program: "Information Technology",
        major: "major ",
        batch: "2015",
    },
    {
        srCode: "19-40000",
        name: "name name",
        program: "Computer Science",
        major: "major ",
        batch: "2021",
    },
    {
        srCode: "19-03000",
        name: "name name",
        program: "Information Technology",
        major: "major ",
        batch: "2011",
    },
    {
        srCode: "19-09000",
        name: "name name",
        program: "Information Technology",
        major: "major ",
        batch: "2001",
    },
];

const FilterSection = () => {
    const [state, dispatch] = useReducer(alumniRecordReucer, INITIAL_STATE);
    const batchOptions = getUniqueVal(dummy, "batch");
    const programOptions = getUniqueVal(dummy, "program");

    return (
        <form className="flex justify-between items-end">
            <div className="flex gap-3">
                <SelectInput
                    label={"Batch"}
                    options={batchOptions}
                    value={state.batch}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            field: "batch",
                            value: e.target.value,
                        });
                    }}
                />
                <SelectInput
                    label={"Program"}
                    options={programOptions}
                    value={state.program}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            field: "batch",
                            value: e.target.value,
                        });
                    }}
                />
            </div>
            <div className="w-80 h-10">
                <SearchBar />
            </div>
        </form>
    );
};

export { FilterSection };
