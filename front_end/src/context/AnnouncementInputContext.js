import { useState, createContext } from "react";

const AnnouncementInputContext = createContext({});

export const AnnouncementContextProvider = ({ children }) => {
    const [announcementInput, setAnnouncementInput] = useState({
        title: "",
        body: "",
        image: "",
        endpoint: "",
    });

    return (
        <AnnouncementInputContext.Provider
            value={{ announcementInput, setAnnouncementInput }}
        >
            {children}
        </AnnouncementInputContext.Provider>
    );
};

export default AnnouncementInputContext;
