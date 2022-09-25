import { createContext, useState } from "react";

const AdminAuthContext = createContext({});

export const AdminAuthContextProvider = ({ children }) => {
    const [authAdmin, setAuthAdmin] = useState({});

    return (
        <AdminAuthContext.Provider value={{ authAdmin, setAuthAdmin }}>
            {children}
        </AdminAuthContext.Provider>
    );
};

export default AdminAuthContext;
