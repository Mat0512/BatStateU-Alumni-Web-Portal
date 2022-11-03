import { FiltersSection } from "./FiltersSection";
import { ActivitylogTable } from "./ActivityLogTable";
import {
    activityLogReducer,
    INITIAL_STATE,
} from "../reducer/ActivityLogReducer";
import { useReducer } from "react";
import { useFectchActivityLog } from "../hooks/useFetchActivityLog";

const ActivityLog = () => {
    const [state, dispatch] = useReducer(activityLogReducer, INITIAL_STATE);
    const activityLog = useFectchActivityLog(state, dispatch);

    return (
        <>
            <h1 className="my-2 text-3xl text-grey-400">Activity Log</h1>
            <FiltersSection
                state={state}
                dispatch={dispatch}
                data={activityLog}
            />
            <ActivitylogTable data={activityLog} />
        </>
    );
};

export { ActivityLog };
