import Link from "next/link";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactHeader}>
        <h1 className={styles.title}>Contact us</h1>
        <p className={styles.desc}>
          Got any questions or want a blog written, send us a message!
        </p>
      </div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          id="fname"
          className={styles.input}
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          className={styles.input}
        />
        <textarea
          placeholder="Message"
          id="textarea"
          className={styles.textarea}
        />
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <button className={styles.button}>Send message</button>
        </Link>
      </form>
    </div>
  );
};

export default Page;
