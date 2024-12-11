import { createContext } from "react";

export const DataContext = createContext({})

export const DataContextProvider = ({children}) => {

    const data = {

    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}