const SelectionInput = ({ label, inputs, value, state, dispatch }) => {
    console.log("inputs: ", inputs);
    return (
        <div className="flex flex-col gap-1 text-sm">
            <label htmlFor={label}>{label.toUpperCase()}</label>
            <select
                className="bg-grey-100 border border-grey-300 rounded p-1"
                id="label"
                value={"hello"}
                onChange={(e) => "hello"}
            >
                {inputs.map((input) => (
                    <option key={input} value={input}>
                        {input.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};

export { SelectionInput };
