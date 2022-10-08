const Row = ({ data, actionColumn, keys }) => {
    console.log("data: ", data);
    console.log("action column: ", actionColumn);
    const hasActionColumn = actionColumn !== undefined;

    const mock = [
        {
            name: "mathew mendoza",
            age: 22,
            profession: "n/a",
        },
        {
            name: "allysa kate maranan",
            age: 22,
            profession: "QA",
        },
    ];
    const rows = mock.reduce((accumulatedRows, element) => {
        const cols = keys.map((key) => {
            if (hasActionColumn && key === "")
                return <div className="flex-1 py-2.5">{actionColumn}</div>;
            return <div className="flex-1 py-2.5">{element[key] || key}</div>;
        });

        const row = (
            <div
                className="flex gap-2 px-4 border-b border-grey-200"
                id={element._id}
            >
                {cols}
            </div>
        );

        return accumulatedRows.concat(row);
    }, []);

    return <>{rows}</>;
};

export { Row };
