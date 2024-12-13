"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("lightMode");

  useEffect(() => {
    const value = localStorage.getItem("theme") || "lightMode";
    setTheme(value);
  }, []);

  const toggle = () => {
    setTheme(theme === "lightMode" ? "darkMode" : "lightMode");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
