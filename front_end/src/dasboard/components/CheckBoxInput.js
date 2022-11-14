const CheckboxInput = ({ label, inputs, value, handleChange }) => {
    console.log("selection value: ", value);
    return (
        <div className="text-sm">
            <p>{label.toUpperCase()}</p>
            <div>
                {inputs.map((input) => (
                    <div
                        key={input}
                        className="flex items-baseline leading-5 gap-1"
                    >
                        <input
                            type="checkbox"
                            id={input}
                            checked={value[input]}
                            onChange={handleChange}
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
