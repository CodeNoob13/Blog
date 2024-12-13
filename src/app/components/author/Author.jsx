import Image from "next/image";
import styles from "./author.module.css";

const Author = ({ image, name, date, altText }) => {
  return (
    <div className={styles.authorContainer}>
      <Image
        src="/authorImage.jpg"
        alt={altText}
        height={36}
        width={36}
        className={styles.authorImage}
      />
      <span className={styles.text}>{name}</span>
      <span className={styles.text}>{date}</span>
    </div>
  );
};

export default Author;
