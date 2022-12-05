const SelectionInput = ({ label, inputs, value, handleChange, id }) => {
    return (
        <div className="flex flex-col gap-1 text-sm">
            <label htmlFor={label}>{label.toUpperCase()}</label>
            <select
                className="bg-grey-100 border border-grey-300 rounded p-1"
                id={id || label}
                value={value}
                onChange={handleChange}
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
