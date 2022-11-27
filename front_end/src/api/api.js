import axios from "axios";

const client = axios.create({
    baseURL: process.env.SERVER_DOMAIN || "http://localhost:4000",
    withCredentials: true,
});

export { client };
