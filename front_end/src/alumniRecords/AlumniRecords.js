import { FilterSection } from "./FilterSection";
import { AlumniRecordsTable } from "./AlumniRecordsTable";

const AlumniRecords = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-poppins text-3xl text-grey-400">
                Alumni Records
            </h1>
            <FilterSection />
            <AlumniRecordsTable />
        </div>
    );
};

export { AlumniRecords };
