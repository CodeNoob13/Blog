"use client";

import { useContext, useState } from "react";
import styles from "./themeswitcher.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeSwitcher = ({ hide }) => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      onClick={toggle}
      className={`${hide && styles.visible} ${styles.themeSwitcher}`}
      style={theme === "darkMode" ? { backgroundColor: "#4B6BFB" } : {}}
    >
      <div
        className={styles.dot}
        style={{
          transform:
            theme === "darkMode"
              ? "translateY(-50%) translateX(22px)"
              : "translateY(-50%) translateX(2px)",
        }}
      >
        <Image
          src="/sun.svg"
          width={14}
          height={14}
          alt="Sun icon on themeswitch button"
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
