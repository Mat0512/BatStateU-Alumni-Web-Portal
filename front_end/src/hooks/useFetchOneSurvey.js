import { useState, useEffect, useContext } from "react";
import { client } from "../api/api";
import AdminAuthContext from "../context/AdminAuthContext";

const useFetchOneSurvey = (id) => {
    const [survey, setSurvey] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { authAdmin } = useContext(AdminAuthContext);

    useEffect(() => {
        const getOneSurvey = async () => {
            try {
                setIsLoading(true);
                const res = await client.get(`/survey${id}`, {
                    withCredentials: true,
                    headers: {
                        authorization: `Bearer ${authAdmin.token}`,
                    },
                });

                setSurvey(res.data);
            } catch (err) {
                alert(err);
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        getOneSurvey();
    }, []);

    return { survey, isLoading };
};

export { useFetchOneSurvey };
