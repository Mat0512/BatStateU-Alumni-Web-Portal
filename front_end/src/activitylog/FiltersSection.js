import { getUniqueVal } from "../table/utils/tableUtils";
import {
    activityLogReducer,
    INITIAL_STATE,
} from "../reducer/ActivityLogReducer";
import { useReducer } from "react";
import { DateInput, SelectInput } from "../table/InputTypes";
import SearchBar from "../search_bar/SearchBar";

const dummy = [
    {
        testKey1: "sheesh",
        testKey2: "hello",
        testKey3: "all",
    },
    {
        testKey1: "sheesh",
        testKey2: "hi",
        testKey3: "values",
    },
    {
        testKey1: "sheesh",
        testKey2: "whatsUp",
        testKey3: "are",
    },
    {
        testKey1: "sheesh",
        testKey2: "konichiwa",
        testKey3: "not",
    },
    {
        testKey1: "sheesh",
        testKey2: "hello",
        testKey3: "same",
    },
    {
        testKey1: "notSheesh",
        testKey2: "hi",
        testKey3: "!!!",
    },
    {
        testKey1: "notSheesh",
        testKey2: "hi",
        testKey3: "!!!",
    },
];

const FiltersSection = () => {
    const [state, dispatch] = useReducer(activityLogReducer, INITIAL_STATE);

    const userOptions = getUniqueVal(dummy, "testKey1");
    const activityOptions = getUniqueVal(dummy, "testKey2");
    const entryOptions = getUniqueVal(dummy, "testKey3");

    console.log("state: ", state);

    return (
        <form className="w-full py-3 flex justify-between">
            <div className="flex gap-4">
                <SelectInput
                    label={"User"}
                    options={userOptions}
                    value={state.userFilter}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "userFilter",
                        });
                    }}
                />
                <SelectInput
                    label={"Activity"}
                    options={activityOptions}
                    value={state.activityFilter}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "activityFilter",
                        });
                    }}
                />
                <SelectInput
                    label={"Entry"}
                    options={entryOptions}
                    value={state.entryFilter}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "entryFilter",
                        });
                    }}
                />
                <DateInput
                    label="Start Date"
                    value={state.startDate}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "startDateFilter",
                        });
                    }}
                />
                <DateInput
                    label="End Date"
                    value={state.startDate}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "endDateFilter",
                        });
                    }}
                    min={state.startDate}
                />
                <SearchBar />
            </div>
        </form>
    );
};

export { FiltersSection };
