import { createContext, useState } from "react";

const SurveyFormInputContext = createContext({});

export const SurveyFormInputContextProvider = ({ children }) => {
    const [surveyFormInput, setSurveyFormInput] = useState({
        id: "",
        title: "",
        url: "",
        description: "",
        college: "",
        endpoint: "",
    });
    return (
        <SurveyFormInputContext.Provider
            value={{ surveyFormInput, setSurveyFormInput }}
        >
            {children}
        </SurveyFormInputContext.Provider>
    );
};

export default SurveyFormInputContext;
