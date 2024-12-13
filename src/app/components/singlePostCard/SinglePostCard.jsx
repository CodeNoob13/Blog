import styles from "./singlePostCard.module.css";
import Image from "next/image";
import Link from "next/link";
import Author from "../author/Author";

const SinglePostCard = ({ img, category, title, altText, link }) => {
  return (
    <Link href={link}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={img} fill alt={altText} />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.label}>{category}</span>
          <h2 className={styles.title}>{title}</h2>
          <Author
            image="/AuthorImage.jpg"
            name="Glenn Marlisa"
            date="20 09 2024"
            altText="Author image"
          />
        </div>
      </div>
    </Link>
  );
};

export default SinglePostCard;
