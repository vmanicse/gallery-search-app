import React, { useState } from "react";

const ApiResponseContext = React.createContext();

export function ApiResponseContextProvider({children}) {

    const [apiJsonData, getApiJsonData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    return(
        <ApiResponseContext.Provider value={{apiJsonData, getApiJsonData, isLoading, setLoading}}>
            {children}
        </ApiResponseContext.Provider>
    );
}

export default ApiResponseContext;