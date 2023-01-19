import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Input(){

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    return (
        <input type="text" className={`input ${darkMode ? 'input-dark' : 'input-light'}`} />
    )
}