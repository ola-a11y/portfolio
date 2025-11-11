import  { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && localStorage.theme === 'dark') {
      return true; 
    }
    return false; 
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const value = {
    isDarkMode,    
    toggleTheme: () => setIsDarkMode(!isDarkMode), 
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};