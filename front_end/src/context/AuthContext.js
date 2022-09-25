import { createContext, useReducer, useState } from "react";

// all codes that commented out are auth context provider with useEffect
// const INITIAL_STATE = {
//     user: null,
//     isFetching: null,
//     error: false,
// };

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
