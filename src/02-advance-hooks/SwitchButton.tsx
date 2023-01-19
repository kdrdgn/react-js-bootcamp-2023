import { changeTheme, useAppDispatch, useAppSelector } from "../store";

export default function SwitchButton(){

    const dispatch = useAppDispatch();
    const darkMode = useAppSelector(state => state.app.darkMode);

    const handleChangeTheme = () => {
        if(darkMode) {
            dispatch(changeTheme());
        } else {
            dispatch(changeTheme());
        }
    }

    return (
        <div>
            <h1>Theme Changer</h1>
            <button onClick={handleChangeTheme} className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}>{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
            </div>
    )
}