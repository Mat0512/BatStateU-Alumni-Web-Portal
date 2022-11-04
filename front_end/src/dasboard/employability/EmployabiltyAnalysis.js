import { AnalysisHeader } from "../components/AnalysisHeader";
import { EmployabilityStatus } from "./EmployabilityStatus";

const EmployabilityAnalysis = () => {
    return (
        <div>
            <AnalysisHeader />
            <EmployabilityStatus />
        </div>
    );
};

export { EmployabilityAnalysis };
