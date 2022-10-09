const Table = ({ name, children }) => {
    return (
        <div className="max-w-4xl flex flex-col border border-grey-200 font-poppins">
            <div className="px-4 py-3 text-xl border-b border-grey-200">
                {name || "Table Name"}
            </div>
            {children}
        </div>
    );
};

export { Table };