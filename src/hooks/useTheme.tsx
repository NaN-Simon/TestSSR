/* 
    * useTheme.tsx
    * Custom hook for changing the theme. Works only in pairs: isDarkMode changes the state only to the response from toggleTheme.
    * Кастомный хук для изменения темы. Работает только в паре: isDarkMode меняет состояние только на отклик от toggleTheme.
*/

import { useState, useEffect } from 'react';

const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    // const forceUpdate = useCallback(() => setIsDarkMode(!isDarkMode), [isDarkMode]);
    const handleThemeChange = () => {
        const savedTheme = window.localStorage.getItem('theme');
        const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;


        if (savedTheme) {
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            }
        } else {
            if (prefersDarkScheme) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDarkMode(false);
            }
        }
    };
    
    useEffect(() => {
        // Initial check
        handleThemeChange();
        window.addEventListener('storage', handleThemeChange);
        return () => window.removeEventListener('storage', handleThemeChange);
    }, [isDarkMode, handleThemeChange]);
    
    const toggleTheme = () => {
        // console.log("Switch clicked");
        const newIsDarkMode = !isDarkMode;
        setIsDarkMode(newIsDarkMode);
        if (newIsDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        handleThemeChange()
    };

    return { isDarkMode, toggleTheme };
};

export default useTheme;
