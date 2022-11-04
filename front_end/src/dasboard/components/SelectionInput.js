const SelectionInput = ({ label, inputs, state, dispatch }) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={label}>{label.toUpperCase()}</label>
            <select id="label" value={"hello"} onChange={(e) => "hello"}>
                {inputs.map((input) => (
                    <option value={input}>{input.toUpperCase()}</option>
                ))}
            </select>
        </div>
    );
};

export { SelectionInput };
