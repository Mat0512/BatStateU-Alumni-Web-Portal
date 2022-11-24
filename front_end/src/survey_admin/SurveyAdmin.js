import { useState, useEffect } from "react";
import { client } from "../api/api";
import { AdminSurveyCard } from "./components/AdminSurveyCard";
const SurveyAdmin = () => {
    const [surveys, setSurveys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                setIsLoading("true");
                const res = await client.get("/survey");
                console.log(res.data);
                setSurveys(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSurveys();
    }, []);

    return (
        //    <div className="w-full h-screen overflow-y flex flex-wrap gap-2">
        <div className="flex flex-wrap gap-5">
            {surveys.length === 0 ? (
                <div className="justify-self-center center font-poppins text-lg">
                    "No posted Surveys."
                </div>
            ) : isLoading ? (
                <div className="justify-self-center center font-poppins text-lg">
                    "No posted Surveys."
                </div>
            ) : (
                surveys.map((survey) => (
                    <AdminSurveyCard
                        title={survey.title}
                        editLink={survey.editableGLink}
                        date={survey.updatedAt}
                    />
                ))
            )}
        </div>
    );
};

export { SurveyAdmin };
