import { useState, useEffect } from "react";
import { surveyDummy } from "../dummy_data/surveyDummy";
import { SurveyCard } from "./components/SurveyCard";
import { client } from "../api/api";
import { format, parseISO } from "date-fns";

const Survey = () => {
    console.log("rendered");
    console.log("dummy: ", surveyDummy);
    const [surveys, setSurveys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                setIsLoading(true);
                const res = await client.get("/survey", {
                    withCredentials: true,
                });
                const formattedDateSurveyData = res.data.map((surveyData) => ({
                    ...surveyData,
                    updatedAt: format(
                        parseISO(surveyData.updatedAt),
                        "MMMM dd, yyyy"
                    ),
                }));
                setSurveys(formattedDateSurveyData);
                console.log("res: ", formattedDateSurveyData);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        console.log("mounted");
        fetchAnnouncements();
        // setIsLoading(true);
        // setSurveys(surveyDummy);
        // setIsLoading(false);
    }, []);
    console.log("surveys: ", surveys);
    console.log("surey length: ", surveys.length);

    return (
        <ul className="flex flex-wrap gap-5">
            {isLoading
                ? "loading..."
                : surveys.length === 0
                ? "No Posted Announcement Yet"
                : surveys.map((survey) => (
                      <li key={survey._id}>
                          <SurveyCard
                              link={survey.link}
                              title={survey.title}
                              description={survey.description}
                              date={survey.updatedAt}
                          />
                      </li>
                  ))}
        </ul>
        // <>yawa</>
    );
};

export { Survey };
