//controlled component of announcement component

const SearchBar = () => {
    return (
        <input
            className="w-full max-w-2xl h-10 py-2 px-3 font-poppins text-sm text-grey-400 border border-grey-200 rounded"
            type="text"
            placeholder="Search announcement here"
        />
    );
};

export default SearchBar;
