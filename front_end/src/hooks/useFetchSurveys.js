import { useState, useEffect, useContext } from "react";
import { client } from "../api/api";
import AdminAuthContext from "../context/AdminAuthContext";
import { format, parseISO } from "date-fns";

const useFetchSurvey = () => {
    const [surveyList, setSurveyList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { authAdmin } = useContext(AdminAuthContext);

    useEffect(() => {
        const getAllSurvey = async () => {
            try {
                setIsLoading(true);
                const res = await client.get("/survey", {
                    withCredentials: true,
                    headers: {
                        authorization: `Bearer ${authAdmin.token}`,
                    },
                });

                const formattedData = res.data.map((data) => {
                    return {
                        ...data,
                        updatedAt: format(
                            parseISO(data.updatedAt),
                            "MMMM dd, yyyy"
                        ),
                    };
                });

                setSurveyList(formattedData);
            } catch (err) {
                alert(err);
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        getAllSurvey();
    }, []);

    return { surveyList, isLoading };
};

export { useFetchSurvey };
