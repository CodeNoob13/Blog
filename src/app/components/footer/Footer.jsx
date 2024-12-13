import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <footer className={`footerBackground ${styles.container}`}>
      <div className={styles.footerContainer}>
        <div className={styles.aboutContainer}>
          <h3>About</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className={styles.contant}>
            <span className={styles.email}>
              <b>Email:</b> info@techstuff.com
            </span>
          </div>
        </div>

        <div className={styles.linksContainer}>
          <h3>Quick Links</h3>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Archived</Link>
            <Link href="/">Author</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <h3>Category</h3>
          <div className={styles.links}>
            <Link href="/">Lifestyle</Link>
            <Link href="/">Technology</Link>
            <Link href="/">Travel</Link>
            <Link href="/">Business</Link>
            <Link href="/">Economy</Link>
            <Link href="/">Sports</Link>
          </div>
        </div>
        <div className={styles.newsletter}>
          <h3>Weekly Newsletter</h3>
          <p className={styles.newsletterDesc}>
            Get blog articles and offers via email
          </p>
          <form className={styles.form}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Your Email"
                className={styles.input}
              />
              <Image
                src="/email.svg"
                height={14}
                width={18}
                alt="Email icon"
                className={styles.emailSvg}
              />
            </div>

            <button type="submit" className={styles.formButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className={styles.legal}>
        <Logo />
        <div className={styles.legalLinks}>
          <Link href="/">Terms of Use</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
