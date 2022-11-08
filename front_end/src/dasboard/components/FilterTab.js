const FilterTab = ({ children }) => {
    return (
        <form className="flex flex-col gap-3 w-64 h-full p-3 bg-grey-100 border border-grey-200 overflow-y-auto">
            {children}
        </form>
    );
};

export { FilterTab };
