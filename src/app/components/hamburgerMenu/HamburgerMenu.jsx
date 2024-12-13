"use client";

import { useState } from "react";
import styles from "./hamburgermenu.module.css";
import Link from "next/link";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const randomNumb = () => {
    return Math.floor(Math.random() * 12) + 1;
  };

  const random = randomNumb();

  const closeMenu = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 100);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div>
          <span className={open ? styles.rotated : ""}></span>
          <span className={open ? styles.rotated : ""}></span>
          <span className={open ? styles.rotated : ""}></span>
        </div>
      </div>

      {open && (
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link href={`/blogs/${random}`} onClick={closeMenu}>
              Random Blog
            </Link>

            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>
          <div className={styles.switcher}>
            <ThemeSwitcher hide={open} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
