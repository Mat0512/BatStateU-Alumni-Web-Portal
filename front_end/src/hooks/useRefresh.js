import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import AdminAuthContext from "../context/AdminAuthContext";
import { client } from "../api/api";

const useRefreshToken = () => {
    const { setAuth } = useContext(AuthContext);
    const { setAuthAdmin } = useContext(AdminAuthContext);

    const refresh = async (user = null) => {
        const isAdmin = user === "admin";
        const endpoint = isAdmin ? "/admin/refresh" : "/alumni/refresh";

        let res = await client.get(endpoint, { withCredentials: true });
        if (isAdmin) {
            setAuthAdmin((prev) => {
                return { ...prev, token: res.data.token };
            });
        } else {
            setAuth((prev) => {
                return { ...prev, token: res.data.token };
            });
        }
    };

    return refresh;
};

export { useRefreshToken };
