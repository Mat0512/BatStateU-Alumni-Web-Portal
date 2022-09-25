// this context will be shared for profile and edit profile components

import { createContext, useState } from "react";

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    //refactor into
    const [user, setUser] = useState({});
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
