import { EmployabilityAnalysis } from "./analysis/employability/EmployabilityAnalysis";
import { CareerFieldsAnalysis } from "./analysis/careerFields/CareerFieldsAnalysis";
import { JobRelevanceAnalysis } from "./analysis/jobRelevance/JobRelevanceAnalysis";
import { EmploymentCharacteristicsAnalysis } from "./analysis/employmentCharacteristics/EmploymentCharacteristicsAnalysis";
import { UnemploymentPeriodAnalysis } from "./analysis/unemploymentPeriod/UnemploymentPeriodAnalysis";
import { UnemploymentReasonsAnalysis } from "./analysis/unemploymentReasons/UnemploymentReasonsAnalysis";
import { StudyUsefullnessAnalysis } from "./analysis/studyUsefulness/StudyUsefullnessAnalysis";

const Dashboard = () => {
    return (
        <div className="font-poppins flex flex-col gap-10">
            <EmployabilityAnalysis />
            <CareerFieldsAnalysis />
            <JobRelevanceAnalysis />
            <EmploymentCharacteristicsAnalysis />
            <UnemploymentPeriodAnalysis />
            <UnemploymentReasonsAnalysis />
            <StudyUsefullnessAnalysis />
        </div>
    );
};

export { Dashboard };
