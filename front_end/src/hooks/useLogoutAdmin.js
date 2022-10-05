import { client } from "../api/api";
import { useContext } from "react";
import AdminAuthContext from "../context/AdminAuthContext";

const useLogoutAdmin = () => {
    const { setAuth } = useContext(AdminAuthContext);
    const logout = async () => {
        setAuth({});
        try {
            const res = await client.get(`\alumni\logout`);
        } catch (err) {
            console.error(err);
        }
    };

    return logout;
};

export { useLogoutAdmin };
