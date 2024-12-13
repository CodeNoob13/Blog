"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // Set default theme mode
  const [theme, setTheme] = useState("lightMode");

  // if localStorage is set , set the theme default to localStorage
  useEffect(() => {
    const value = localStorage.getItem("theme") || "lightMode";
    setTheme(value);
  }, []);

  // Switches theme
  const toggle = () => {
    setTheme(theme === "lightMode" ? "darkMode" : "lightMode");
  };

  // if theme switches set localStorage to theme mode
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // Provide context to components to switch mode
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
