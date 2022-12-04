import cubejs from "@cubejs-client/core";
import { CubeProvider } from "@cubejs-client/react";

import { EmployabilityAnalysis } from "./analysis/employability/EmployabilityAnalysis";
import { CareerFieldsAnalysis } from "./analysis/careerFields/CareerFieldsAnalysis";
import { JobRelevanceAnalysis } from "./analysis/jobRelevance/JobRelevanceAnalysis";
import { EmploymentCharacteristicsAnalysis } from "./analysis/employmentCharacteristics/EmploymentCharacteristicsAnalysis";
import { UnemploymentPeriodAnalysis } from "./analysis/unemploymentPeriod/UnemploymentPeriodAnalysis";
import { UnemploymentReasonsAnalysis } from "./analysis/unemploymentReasons/UnemploymentReasonsAnalysis";
import { StudyUsefullnessAnalysis } from "./analysis/studyUsefulness/StudyUsefullnessAnalysis";

const Dashboard = () => {
    const cubejsApi = cubejs(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzAwODAwOTh9.mYBHAR_L8mmm1ncLSQoFQ__38eLNBocvk-ntzJVm7lI",
        {
            apiUrl: "https://peach-jay.aws-us-east-1.cubecloudapp.dev/dev-mode/dev-mathew-44c97b72/cubejs-api/v1",
        }
    );

    return (
        <CubeProvider cubejsApi={cubejsApi}>
            <div className="font-poppins flex flex-col gap-10">
                <EmployabilityAnalysis />
                {/* 
                        <CareerFieldsAnalysis />
            <JobRelevanceAnalysis />
            <EmploymentCharacteristicsAnalysis />
            <UnemploymentPeriodAnalysis />
            <UnemploymentReasonsAnalysis />
            <StudyUsefullnessAnalysis /> 
            */}
            </div>
        </CubeProvider>
    );
};

export { Dashboard };
