import Author from "../author/Author";
import styles from "./heroSection.module.css";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ block, image, altText, category, title }) => {
  return (
    <Link href="/blogs/1">
      <div
        className={styles.container}
        style={!block ? { paddingBottom: "64px" } : null}
      >
        <div className={styles.heroSection}>
          <div
            className={styles.imgContainer}
            style={!block ? { maxHeight: "500px" } : null}
          >
            <Image src={image} alt={altText} fill loading="lazy" />
          </div>

          <div
            className={
              block ? `${styles.heroContentBlock}` : `${styles.heroContent}`
            }
          >
            <span className={styles.label}>{category}</span>
            <h1 className={styles.heroTitle}>{title}</h1>
            <Author
              image="/AuthorImage.jpg"
              name="Glenn Marlisa"
              date="20 09 2024"
              altText="Author image"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroSection;
