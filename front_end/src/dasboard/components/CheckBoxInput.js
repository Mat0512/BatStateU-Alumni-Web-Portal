const CheckboxInput = ({ label, inputs, state, dispatch }) => {
    return (
        <div className="flex flex-col gap-1">
            <p>{label.toUpperCase}</p>
            {inputs.map((input) => (
                <div>
                    <input
                        type="checkbox"
                        id={label}
                        value={input}
                        name={label}
                    />
                    <label htmlFor={input}>{label.toUpperCase()}</label>
                </div>
            ))}
        </div>
    );
};

export { CheckboxInput };
