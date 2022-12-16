import { Table } from "../table/Table";
import { Row } from "../table/Row";
import { Columns } from "../table/Columns";
import { Button } from "../table/Button";
import { useNavigate } from "react-router-dom";

const AlumniRecordsTable = ({ data, state, dispatch }) => {
    const navigate = useNavigate();
    const columns = [
        "SR-Code",
        "First Name",
        "Middle Name",
        "Last Name",
        "Program",
        "Batch",
        "",
    ];

    const selectedKeys = [
        "srCode",
        "firstName",
        "middleName",
        "lastName",
        "program",
        "yearGraduated",
    ];

    const downloadPdfColumn = (
        <div className="flex gap-2 items-center">
            <Button
                color="blue"
                label="Download PDF"
                handleClick={(e) => {
                    const id = e.target.parentNode.parentNode.id;
                    navigate(`/pdf/${id}`);
                }}
                contentSize
            />
        </div>
    );

    const handlePrev = () => {
        dispatch({
            type: "field",
            field: "page",
            value: Math.max(0, state.page - 1),
        });
    };

    const handleNext = () => {
        dispatch({
            type: "field",
            field: "page",
            value: Math.min(state.totalPage - 1, state.page + 1),
        });
    };

    const tablePagingRow = (
        <div className="flex flex-row gap-4">
            <>
                <button
                    className="bg-zinc-200 text-grey border text-sm rounded border-grey-200 py px-5 hover:bg-white hover:text-blue hover:border-blue"
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <button
                    className="bg-zinc-200 text-grey border text-sm rounded border-grey-200 py px-5 hover:bg-white hover:text-blue hover:border-blue"
                    onClick={handleNext}
                >
                    Next
                </button>
            </>
        </div>
    );

    return (
        <Table name="Alumni Records" paging={!state.srCode && tablePagingRow}>
            <Columns columns={columns} />
            <Row
                data={data}
                selectedKeys={selectedKeys}
                actionColumn={downloadPdfColumn}
            />
        </Table>
    );
};

export { AlumniRecordsTable };
