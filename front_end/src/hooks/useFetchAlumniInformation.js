import { useEffect, useState } from "react";
import { client } from "../api/api";
import { queryStringParser } from "../api/utilities/queryStringParser";

const useFectchAlumniInformation = (state, dispatch) => {
    console.log("state at top: ", state);
    useEffect(() => {
        const queryString = queryStringParser(
            state.srCode
                ? { srCode: state.srCode }
                : {
                      "Batch/Year Graduated": state.batch,
                      Program: state.program,
                      page: state.page,
                  }
        );

        console.log("query:  ", queryString);

        const fetchAlumniInformations = async () => {
            console.log("state: ", state);
            try {
                const res = await client.get(`/alumni-records/${queryString}`);
                if (!res) {
                    alert("error");
                }

                console.log("resonse: ", res.data);
                console.log("resonse data: ", res.data.data);
                console.log("resonse total: ", res.data.totalPages);

                dispatch({
                    type: "field",
                    field: "totalPage",
                    value: res.data.totalPages,
                });
                dispatch({
                    type: "field",
                    field: "data",
                    value: res.data.data,
                });

                dispatch({ type: "success" });
            } catch (error) {
                console.log(error);
            } finally {
                dispatch({ type: "success" });
            }
        };

        fetchAlumniInformations();
    }, [state.isLoading]);

    return state.data;
};

export { useFectchAlumniInformation };
