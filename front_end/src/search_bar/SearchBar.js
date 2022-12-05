//controlled component of announcement component

const SearchBar = ({ state, handleChange, placeholder, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="flex gap-1">
            <input
                className="max-w-lg w-full h-10 py-2 px-3 font-poppins text-sm text-grey-400 border border-grey-200 rounded"
                type="text"
                placeholder={placeholder || "Search here"}
                value={state}
                onChange={handleChange}
            />
            {handleSubmit && (
                <button
                    type="submit"
                    className="ml-2 bg-zinc-200 py-1.5 px-3 border rounded border-grey-300 text-grey-300 text-md font-poppins hover:border-blue hover:text-blue"
                >
                    Search
                </button>
            )}
        </form>
    );
};

export default SearchBar;
