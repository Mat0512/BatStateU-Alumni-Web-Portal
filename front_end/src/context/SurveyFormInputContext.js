import { createContext, useState } from "react";

const SurveyFormInputContext = createContext({});

export const SurveyFormInputContextProvider = ({ children }) => {
    const [surveyFormInput, setSurveyFormInput] = useState({
        title: "",
        url: "",
        description: "",
        college: "",
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
