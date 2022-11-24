import { createContext, useState } from "react";

const SurveyFormInputContext = createContext({});

//context for survey page of admin
export const SurveyFormInputContextProvider = ({ children }) => {
    const [surveyFormInput, setSurveyFormInput] = useState({
        id: "",
        title: "",
        gLink: "",
        editableGLink: "",
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
