const Input = ({ label, value, type, handleOnChange }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor="firstname">{label}</label>
            <input
                className="px-2.5 h-9 rounded-md font-sm font-poppins border border-grey-200"
                type={type || "text"}
                value={value}
                onChange={handleOnChange}
            />
        </div>
    );
};

export { Input };
