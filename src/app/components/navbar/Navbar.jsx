import styles from "./navbar.module.css";
import Image from "next/image";
import NavLinks from "../navlinks/NavLinks";
import SearchBar from "../searchbar/SearchBar";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import Logo from "../logo/Logo";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <HamburgerMenu />
        <Logo />
        <NavLinks />
        <div className={styles.rightSideNav}>
          {/* <SearchBar /> */}
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
``;
