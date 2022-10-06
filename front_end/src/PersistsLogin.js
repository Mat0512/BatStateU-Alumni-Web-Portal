import { Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useRefreshToken } from "./hooks/useRefresh";
import AuthContext from "./context/AuthContext";
import AdminAuthContext from "./context/AdminAuthContext";

const PersistLogin = ({ admin }) => {
    console.log("admin param: ", admin);
    const { auth } = useContext(AuthContext);
    const { authAdmin } = useContext(AdminAuthContext);
    const refresh = useRefreshToken();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("PERSIST LOGIN RENDERED!!!!!!!!!!!!!!");
        const getToken = async () => {
            try {
                if (admin) {
                    console.log("refresh for admin");
                    await refresh("admin");
                } else {
                    console.log("refresh for alumni");
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
            console.log("getToken invoke!!!!!!!!!!");
            getToken();
        } else {
            setIsLoading(false);
        }
    }, []);
    return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export { PersistLogin };
