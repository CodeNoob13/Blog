"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "lightMode";
    }
    localStorage.getItem("theme") || "lightMode";
  };

  const [theme, setTheme] = useState(() => getFromLocalStorage());

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
