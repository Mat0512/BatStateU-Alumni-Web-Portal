import { useEffect, useState } from "react";
import { client } from "../api/api";
import { queryStringParser } from "../api/utilities/queryStringParser";
import { format, parseISO } from "date-fns";

const useFectchActivityLog = (state, dispatch) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const queryString = queryStringParser({
            user: state.user,
            activity: state.activity,
            entry: state.entry,
            startDate: state.startDate,
            endDate: state.endDate,
        });

        const fetchActivityLog = async () => {
            try {
                const res = await client.get(`/activitylog/${queryString}`);
                if (!res) {
                    alert("error");
                }

                const formattedData = res.data.map((data) => {
                    return {
                        ...data,
                        updatedAt: format(
                            parseISO(data.updatedAt),
                            "MMMM dd yyyy"
                        ),
                        time: format(parseISO(data.updatedAt), "h:m aaa"),
                    };
                });
                setData(formattedData);
            } catch (error) {
                console.log(error);
            } finally {
                dispatch({ type: "success" });
            }
        };

        fetchActivityLog();
    }, [state.isLoading]);
    return data;
};

export { useFectchActivityLog };
