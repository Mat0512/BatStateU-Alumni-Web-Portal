//not decided if this component will be a stateful or not
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <input
            className="search-bar"
            type="input"
            placeholder="Search announcement here"
        />
    );
};

export default SearchBar;
