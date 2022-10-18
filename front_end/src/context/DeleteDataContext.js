import { createContext, useState } from "react";

const DeleteDataContext = createContext({});

export const DeleteDataContextProvider = ({children}) => {
     const [dataToDelete, setDataToDelete] = useState({})
     return <DeleteDataContext.Provider value={
          {dataToDelete, setDataToDelete}
     }>
          {children}
     </DeleteDataContext.Provider>
};

export default DeleteDataContext