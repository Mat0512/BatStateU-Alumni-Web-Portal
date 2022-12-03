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
    let apiTokenPromise;

    const cubejsApi = cubejs(
        () => {
            if (!apiTokenPromise) {
                apiTokenPromise = fetch(
                    `${
                        process.env.REACT_APP_SERVER_LIVE ||
                        process.env.REACT_APP_SERVER_LOCAL
                    }/cubejs/auth/cubejs-token`
                )
                    .then((res) => res.json())
                    .then((r) => {
                        console.log("\n\n\n token: ", r);
                        return r.token;
                    })
                    .catch((err) => {
                        alert(err.message);
                    });
            }
            return apiTokenPromise;
        },
        {
            apiUrl: process.env.REACT_APP_API_URL,
        }
    );

    return (
        <CubeProvider cubejsApi={cubejsApi}>
            <div className="font-poppins flex flex-col gap-10">
                <EmployabilityAnalysis />
                {/* <CareerFieldsAnalysis />
            <JobRelevanceAnalysis />
            <EmploymentCharacteristicsAnalysis />
            <UnemploymentPeriodAnalysis />
            <UnemploymentReasonsAnalysis />
            <StudyUsefullnessAnalysis /> */}
            </div>
        </CubeProvider>
    );
};

export { Dashboard };
