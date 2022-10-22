const Row = ({ data, actionColumn, selectedKeys }) => {
    console.log("data: ", data);
    console.log("action column: ", actionColumn);
    const hasActionColumn = actionColumn !== undefined;

    const reducer = (accumulatedRows, element) => {
        console.log("element: ", element._id);
        const noIdKeys =
            selectedKeys || Object.keys(element).filter((key) => key !== "_id");
        console.log("noIdKeys: ", noIdKeys);

        const cols = noIdKeys.map((key, index) => {
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

            return (
                <div className="flex-1 py-2.5 text-sm align-center">
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

    const rows = data.length != 0 ? data.reduce(reducer, []) : "No Annoucement";
    return <div className="overflow-y-auto">{rows}</div>;
};

export { Row };
