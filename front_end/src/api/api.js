import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_SERVER_LIVE || "http://localhost:4001",
    withCredentials: true,
});

export { client };
