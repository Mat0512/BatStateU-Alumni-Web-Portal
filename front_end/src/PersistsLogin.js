import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useRefreshToken } from "./hooks/useRefresh";
import AuthContext from "./context/AuthContext";
import AdminAuthContext from "./context/AdminAuthContext";

const PersistLogin = ({ admin }) => {
    const { auth } = useContext(AuthContext);
    const { authAdmin } = useContext(AdminAuthContext);
    const refresh = useRefreshToken();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getToken = async () => {
            try {
                if (admin) {
                    await refresh("admin");
                } else {
                    await refresh();
                }
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        if (
            (auth && !auth.accessToken) ||
            (authAdmin && !authAdmin.accessToken)
        ) {
            getToken();
        } else {
            setIsLoading(false);
        }
    }, []);
    return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export { PersistLogin };
