"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import Image from "next/image";
import Author from "@/app/components/author/Author";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/data.json");
      const data = await res.json();
      setData(Array(data[id - 1]));
      setLoading(false);
    };

    fetchData();
  });

  console.log(data);

  if (loading) return <p>Loading</p>;

  return (
    <div className={styles.container}>
      {data.map((blog, index) => (
        <div key={index}>
          <span className={styles.label}>{blog.category}</span>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.imgContainer}>
            <Image src={blog.img} alt={blog.altText} fill />
          </div>
          <p className={styles.desc}>{blog.blogText}</p>
        </div>
      ))}
      <Author
        image="/AuthorImage.jpg"
        name="Glenn Marlisa"
        date="20 09 2024"
        altText="Author image"
      />
    </div>
  );
};

export default Page;
