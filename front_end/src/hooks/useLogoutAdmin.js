import { client } from "../api/api";
import { useContext } from "react";
import AdminAuthContext from "../context/AdminAuthContext";

const useLogoutAdmin = () => {
    const { setAuthAdmin } = useContext(AdminAuthContext);
    const logout = async () => {
        setAuthAdmin({});
        try {
            const res = await client.get(`\admin\logout`);
        } catch (err) {
            console.error(err);
        }
    };

    return logout;
};

export { useLogoutAdmin };
