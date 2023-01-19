import React, { createContext, useReducer } from "react";

interface IThemeContext {
    state: any,
    dispatch: React.Dispatch<React.SetStateAction<any>>
}


export const ThemeContext = createContext<IThemeContext>({
    state: {},
    dispatch: () => {}
});

const initialState = {
    darkMode: true
}

const themeReducer = (state: any, action: any) => {
    switch(action.type) {
        case "LIGHT":
            return { darkMode: false}
        case "DARK":
            return { darkMode: true}
        default: 
            return state;
    }
}

export function ThemeProvider(props:any) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
}