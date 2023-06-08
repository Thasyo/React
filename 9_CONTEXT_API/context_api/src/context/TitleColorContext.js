//criar contexto
import { Children, createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    //switch
};

//criar provider
export const TitleColorProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"});

    return <TitleColorContext.Provider value={{...state}}>
        {children}
    </TitleColorContext.Provider>

}
