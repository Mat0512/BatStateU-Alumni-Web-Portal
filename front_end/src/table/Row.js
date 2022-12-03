const Row = ({ data, actionColumn, selectedKeys }) => {
    const hasActionColumn = actionColumn !== undefined;

    const reducer = (accumulatedRows, element) => {
        const noIdKeys =
            selectedKeys || Object.keys(element).filter((key) => key !== "_id");

        const cols = noIdKeys.map((key, index) => {
            //for button column
            if (hasActionColumn && index === noIdKeys.length - 1) {
                const concatCols = [
                    <div className="flex-1 py-2.5 text-sm align-center">
                        {element[key] || key}
                    </div>,
                    <div
                        id={element._id}
                        className="flex-1 py-2.5 text-sm align-center"
                    >
                        {actionColumn}
                    </div>,
                ];
                return [...concatCols];
            }

            //for non-button columns
            return (
                <div
                    className={`flex-1 py-2.5 text-sm ${
                        key === "Program" && "grow"
                    } align-center`}
                >
                    {element[key] || key}
                </div>
            );
        });

        const row = (
            <div className="flex gap-5 px-4 border-b border-grey-200">
                {cols}
            </div>
        );

        return accumulatedRows.concat(row);
    };

    const rows =
        data.length != 0 ? (
            data.reduce(reducer, [])
        ) : (
            <div className="w-full py-5 flex justify-center items-center font-poppins text-lg text-grey-300">
                No Posted Entries
            </div>
        );
    return <div className="overflow-y-auto text-sm font-roboto">{rows}</div>;
};

export { Row };
