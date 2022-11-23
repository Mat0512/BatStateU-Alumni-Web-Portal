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
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-poppins">Alumni Tracking Surveys</h1>
            <div className="flex flex-wrap gap-5">
                <SurveyCard
                    link="alumni-tracking-survey"
                    title={"Alumni Tracking Survey"}
                    description={
                        "This survey form is intended to gather information with regard to your - Personal Information, Alumni Information and Employability (Job and Curriculum Relevance). The data to be gathered will be used to track the employability of the alumni, to determine the effectiveness of the course curriculum taken to their current profession, and for record purposes. Rest assured that the data provided in this form will only be used for the said purpose in accordance to all the provisions of the Republic Act No. 10173 or the Data Privacy of 2012.  "
                    }
                />
                <SurveyCard
                    link="alumni-info-survey"
                    title={"Alumni Information Survey"}
                    description={
                        "This survey form is intended to gather information with regard to your - Personal Information, Family Background, Training Programs, and other information which will be utilized for monitoring and tracking of records. Rest assured that the data provided in this form will only be used for the said purpose in accordance to all the provisions of the Republic Act No. 10173 or the Data Privacy of 2012."
                    }
                />
            </div>

            <h1 className="text-xl font-poppins">Surveys via Gforms</h1>
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
        </div>
    );
};

export { Survey };
