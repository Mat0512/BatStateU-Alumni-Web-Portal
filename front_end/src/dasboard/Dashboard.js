import { EmployabilityAnalysis } from "./analysis/employability/EmployabilityAnalysis";
import { CareerFieldsAnalysis } from "./analysis/careerFields/CareerFieldsAnalysis";

const Dashboard = () => {
    return (
        <div className="font-poppins flex flex-col gap-10">
            <EmployabilityAnalysis />
            <CareerFieldsAnalysis />
        </div>
    );
};

export { Dashboard };
