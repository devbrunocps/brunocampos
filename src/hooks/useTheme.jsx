import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme || 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        theme == "dark" ? root.classList.add("dark") : root.classList.remove("dark");
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}