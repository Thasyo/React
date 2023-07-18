import { createContext } from "react"

export const someContext = createContext()

export const HookUseContext = ({children}) => {

    const contextValue = "Testando contexto"

    return(
        <someContext.Provider value={{contextValue}}>
            {children}
        </someContext.Provider>
    )

}