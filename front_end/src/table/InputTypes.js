const SelectInput = ({ label, options, value, setValue }) => {
    return (
        <div className="max-w-2xl w-full flex flex-col font-poppins text-sm">
            <label className="" htmlFor={label}>
                {label}
            </label>
            <select
                className="p-2 text-sm border border-grey-200 rounded"
                id={label}
                value={value}
                onChange={setValue}
            >
                {options.map((val) => {
                    return (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

const DateInput = ({ label, value, setValue, min }) => {
    return (
        <div className="max-w-2xl w-full flex flex-col font-poppins text-sm">
            <label className="" htmlFor={label}>
                {label}
            </label>
            <input
                className="p-2 text-sm border border-grey-200 rounded"
                type="date"
                onKeyDown={(e) => {
                    e.preventDefault();
                }}
                min={min ? min : false}
                id={label}
                value={value}
                onChange={setValue}
            />
        </div>
    );
};

export { SelectInput, DateInput };
