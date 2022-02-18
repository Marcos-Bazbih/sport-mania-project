import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

const darkMode = {
    color: "#d5eeff",
    background: "#34495e",
    isDark: true
};
const dayMode = {
    color: "#34495e",
    background: "#d5eeff",
    isDark: false
};

const DarkModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState(dayMode);

    useEffect(() => {
        let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDarkMode ? setMode(darkMode) : setMode(dayMode)
    }, [])

    const ToggleTheme = () => {
        mode === dayMode ? setMode(darkMode) : setMode(dayMode)
    };

    return (
        <DarkModeContext.Provider value={{ mode, ToggleTheme }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContextProvider;