const TextInput = ({ label, register, field, validation }) => {
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    };

    const validation2 = {};
    return (
        <div className="flex flex-col w-full">
            <label className="" htmlFor={label}>
                {capitalize(label)}
            </label>
            <input
                className="p-1 border border-grey-200 rounded"
                type="text"
                {...register(field || label, validation)}
            />
        </div>
    );
};

export { TextInput };
