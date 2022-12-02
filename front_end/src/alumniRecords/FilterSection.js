import { SelectInput } from "../table/InputTypes";
import SearchBar from "../search_bar/SearchBar";
import { getUniqueVal } from "../table/utils/tableUtils";
import { client } from "../api/api";

const FilterSection = ({ state, dispatch, data }) => {
    const batchOptions = ["all"].concat(getUniqueVal(data, "Batch"));
    const programOptions = ["all"].concat(getUniqueVal(data, "Program"));

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch({ type: "field", field: "srCode", value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchAlumniInfo = async () => {
            try {
                const res = await client.get(
                    `/alumi-records/dummy?srCode=${state.srCode}`
                );
                dispatch({
                    type: "field",
                    field: "data",
                    value: res.data.data,
                });
            } catch (err) {
                console.log(err);
                alert(err.message);
            }
        };
        fetchAlumniInfo();
    };
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
                <SearchBar
                    value={state.srCode}
                    handleChange={handleSearch}
                    handleSubmit={handleSubmit}
                />
            </div>
        </form>
    );
};

export { FilterSection };
