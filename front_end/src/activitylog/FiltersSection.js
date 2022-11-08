import { getUniqueVal } from "../table/utils/tableUtils";
import { DateInput, SelectInput } from "../table/InputTypes";

const FiltersSection = ({ data, state, dispatch }) => {
    const userOptions = ["all"].concat(getUniqueVal(data, "user"));
    const activityOptions = ["all"].concat(getUniqueVal(data, "activity"));
    const entryOptions = ["all"].concat(getUniqueVal(data, "entry"));

    console.log("state at filter: ", state);

    return (
        <form className="w-full py-3 flex justify-between items-end gap-2">
            <div className="flex gap-3">
                <SelectInput
                    label={"User"}
                    options={userOptions}
                    value={state.user}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "user",
                        });
                    }}
                />
                <SelectInput
                    label={"Activity"}
                    options={activityOptions}
                    value={state.activity}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "activity",
                        });
                    }}
                />
                <SelectInput
                    label={"Entry"}
                    options={entryOptions}
                    value={state.entry}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "entry",
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
                            field: "startDate",
                        });
                    }}
                />
                <DateInput
                    label="End Date"
                    value={state.endDate}
                    setValue={(e) => {
                        dispatch({
                            type: "field",
                            value: e.target.value,
                            field: "endDate",
                        });
                    }}
                    min={state.startDate}
                />
            </div>
            {/* <div className="w-80 h-10">
                <SearchBar />
            </div> */}
        </form>
    );
};

export { FiltersSection };
