const FilterTab = ({ children }) => {
    return (
        <form className="flex flex-col w-44 h-full p-2 bg-grey-100 border border-grey-200">
            {children}
        </form>
    );
};

export { FilterTab };
