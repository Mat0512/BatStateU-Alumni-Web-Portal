import { client } from "../api/api";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useLogout = () => {
    const { setAuth } = useContext(AuthContext);
    const logout = async () => {
        setAuth({});
        try {
            const res = await client.get(`/alumni/logout`);
        } catch (err) {
            console.error(err);
        }
    };

    return logout;
};

export { useLogout };
