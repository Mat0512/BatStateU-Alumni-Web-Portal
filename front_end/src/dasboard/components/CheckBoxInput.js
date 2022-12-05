const CheckboxInput = ({ label, inputs, value, handleChange, name }) => {
    return (
        <div className="text-sm">
            <p>{label.toUpperCase()}</p>
            <div className="mt-1 flex flex-col gap-1">
                {inputs.map((input) => (
                    <div
                        key={{ input }}
                        className="flex items-baseline leading-5 gap-1"
                    >
                        <input
                            type="checkbox"
                            id={input}
                            checked={value[input]}
                            onChange={handleChange}
                            name={name || label}
                        />
                        <label>{input}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { CheckboxInput };
