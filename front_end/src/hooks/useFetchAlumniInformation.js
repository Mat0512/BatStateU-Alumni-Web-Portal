import { useEffect, useState } from "react";
import { client } from "../api/api";
import { queryStringParser } from "../api/utilities/queryStringParser";

const useFectchAlumniInformation = (state, dispatch) => {
    console.log("sr code: ", state.srCode);
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

        const fetchAlumniInformations = setTimeout(async () => {
            try {
                const res = await client.get(`/alumni-records/${queryString}`);
                if (!res) {
                    alert("error");
                }
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
        }, 1700);

        // fetchAlumniInformations();
        return () => clearTimeout(fetchAlumniInformations);
    }, [state.isLoading, state.srCode]);

    return state.data;
};

export { useFectchAlumniInformation };
