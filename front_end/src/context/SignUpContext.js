import { createContext, useState } from "react";

const SignUpContext = createContext({});

export const SignUpContextProvider = ({ children }) => {
    const [emailForVerification, setEmailForVerification] = useState({
        email: "",
    });
    return (
        <SignUpContext.Provider
            value={{ emailForVerification, setEmailForVerification }}
        >
            {children}
        </SignUpContext.Provider>
    );
};

export default SignUpContext;
