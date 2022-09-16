const Input = ({ label, value, handleOnChange }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor="firstname">{label}</label>
            <input
                className="px-1.5 py-1 rounded font-montserrat border border-grey-300"
                id="firstname"
                value={value}
                onChange={handleOnChange}
            />
        </div>
    );
};

export { Input };
