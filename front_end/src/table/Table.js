const Table = ({ name, paging, children }) => {
    return (
        <div className="w-full h-100 flex flex-col justify-between border border-grey-200 font-poppins ">
            <div className="flex flex-col overflow-y-auto">
                <div className="px-4 py-3 text-xl border-b border-grey-200">
                    {name || "Table Name"}
                </div>
                {children}
            </div>
            <div className="w-full flex justify-center p-2">{paging}</div>
        </div>
    );
};

export { Table };
