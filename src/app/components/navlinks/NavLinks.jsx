"use client";

import Link from "next/link";
import styles from "./navlinks.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const NavLinks = () => {
  const [randomNumb, setRandomNumb] = useState(0);

  useEffect(() => {
    setRandomNumb(Math.floor(Math.random() * 11) + 1);
  });

  const setRandomLink = () => {
    const random = Math.floor(Math.random() * 11) + 1;
    setRandomNumb(random);
  };

  return (
    <div className={styles.links}>
      <Link href="/">Home</Link>
      <Link href={`/blogs/${randomNumb}`} onClick={setRandomLink}>
        Random Blog
      </Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default NavLinks;
