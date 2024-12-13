"use client";

import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
