import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import AdminAuthContext from "../context/AdminAuthContext";
import { client } from "../api/api";

const useRefreshToken = () => {
    const { setAuth } = useContext(AuthContext);
    const { setAuthAdmin } = useContext(AdminAuthContext);

    const refresh = async (user = null) => {
        try {
            const isAdmin = user === "admin";
            const endpoint = isAdmin ? "/admin/refresh" : "/alumni/refresh";

            let res = await client.get(endpoint, { withCredentials: true });
            if (isAdmin) {
                setAuthAdmin(res.data);
            } else {
                setAuth(res.data);
            }
        } catch (err) {
            console.log("error: ", err);
        }
    };

    return refresh;
};

export { useRefreshToken };
