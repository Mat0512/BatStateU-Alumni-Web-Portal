import axios from "axios";

const client = axios.create({
    baseURL:
        process.env.REACT_APP_SERVER_LIVE || process.env.REACT_APP_SERVER_LOCAL,
    withCredentials: true,
});

export { client };
