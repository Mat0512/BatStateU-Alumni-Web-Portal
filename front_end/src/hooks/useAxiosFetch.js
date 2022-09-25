import axios from "axios";
import { useState, useEffect } from "react";

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // isMounted is used to prevent memory link as it is used in "if condition" to conditionally save the response in state
        let isMounted = true;
        const source = axios.CancelToken.source;

        const fetchData = (url) => {
            setIsLoading(true);
            try {
                const response = async (url) => {
                    axios.get(url, {
                        cancelToken,
                    });
                };

                if (isMounted) {
                    setData(response);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                isMounted &&
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 2000);
            }
        };

        fetchData(dataUrl);

        const cleanUp = () => {
            console.log("clean up");
            isMounted(false);
            source.cancel();
        };

        return cleanUp;
    });
};
