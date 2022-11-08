const CheckboxInput = ({ label, inputs, selectionState, handleChange }) => {
    return (
        <div className="">
            <p>{label.toUpperCase()}</p>
            <div className="text-sm">
                {inputs.map((input) => (
                    <div key={input} className="flex justify-baseline gap-1">
                        <input
                            type="checkbox"
                            id={input}
                            checked={selectionState && selectionState[input]}
                            onChange={handleChange && handleChange}
                            name={label}
                        />
                        <label htmlFor={input}>{input}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { CheckboxInput };
