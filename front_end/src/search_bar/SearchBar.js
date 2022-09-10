//controlled component of announcement component

const SearchBar = () => {
    return (
        <input
            className="ml-4 w-full max-w-lg py-2 px-3 font-poppins text-sm text-grey-400 border border-grey-200 rounded"
            type="input"
            placeholder="Search announcement here"
        />
    );
};

export default SearchBar;
