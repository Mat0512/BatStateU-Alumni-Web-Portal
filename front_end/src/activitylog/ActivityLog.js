import { FiltersSection } from "./FiltersSection";
import { ActivitylogTable } from "./ActivityLogTable";

const ActivityLog = () => {
    return (
        <>
            <h1 className="my-2 text-3xl text-grey-400">Activity Log</h1>
            <FiltersSection />
            <ActivitylogTable />
        </>
    );
};

export { ActivityLog };
