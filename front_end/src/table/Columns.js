const Columns = ({ columns }) => {
    return (
        <div className="bg-grey-100 flex gap-2 px-4 border-b border-grey-200">
            {columns.map((col) => {
                return <div className="flex-1 py-2.5">{col}</div>;
            })}
        </div>
    );
};

export { Columns };
