import Image from "next/image";
import styles from "./searchbar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="search" className={styles.input} />
        <Image
          src="/search.svg"
          alt="Search-icon"
          height={16}
          width={16}
          className={styles.searchIcon}
        />
      </div>
    </div>
  );
};

export default SearchBar;
