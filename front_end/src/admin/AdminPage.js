import { AdminLayout } from "../layout/AdminLayout";
import { Outlet, Navigate } from "react-router-dom";
import AdminAuthContext from "../context/AdminAuthContext";
import { useContext } from "react";

const AdminPage = () => {
    const { authAdmin } = useContext(AdminAuthContext);

    return (
        <>
            {authAdmin.token ? (
                <AdminLayout>
                    <Outlet />
                </AdminLayout>
            ) : (
                <Navigate to="/admin/auth" />
            )}
        </>
    );
};

export { AdminPage };
