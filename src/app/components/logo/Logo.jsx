"use client";

import { useContext } from "react";
import styles from "./logo.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";
import Link from "next/link";

const Logo = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        <Image
          src={theme === "darkMode" ? "/logoDarkmode.svg" : "/logo.svg"}
          fill
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
