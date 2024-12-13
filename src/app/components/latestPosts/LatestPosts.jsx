"use client";

import styles from "./latestPosts.module.css";
import SinglePostCard from "../singlePostCard/SinglePostCard";
import GridComponent from "../gridComponent/GridComponent";
import { useEffect, useState } from "react";

const LatestPosts = () => {
  const [data, setData] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [max, setMax] = useState(6);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("data/data.json");
      const data = await res.json();
      setData(data);
      setVisiblePosts(data.slice(0, max));
    };

    fetchData();
  }, []);

  const filterPosts = (category) => {
    setVisiblePosts(data.filter((blog) => blog.category === category));
  };

  const loadMorePost = () => {
    const nextMax = max + 3;
    setMax(nextMax);

    setVisiblePosts(data.slice(0, nextMax));
  };

  const categories = Array.from(new Set(data.map((item) => item.category)));

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <button
          className={styles.reset}
          onClick={() => {
            setVisiblePosts(data.slice(0, 6));
            setActiveIndex(null);
          }}
        >
          All posts
        </button>

        {categories.map((item, index) => (
          <button
            key={index}
            value={item}
            className={`${index === activeIndex && styles.active} ${
              styles.btn
            }`}
            onClick={() => {
              filterPosts(item);
              setActiveIndex(index);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <GridComponent caption="Latest Posts">
        {visiblePosts.map(
          ({ img, category, title, altText, blogText, id }, index) => (
            <SinglePostCard
              link={`/blogs/${id}`}
              key={index}
              img={img}
              category={category}
              title={title}
              altText={altText}
            />
          )
        )}
      </GridComponent>

      {visiblePosts.length >= 6 && (
        <button
          onClick={loadMorePost}
          className={styles.loadMoreButton}
          disabled={max >= data.length}
        >
          {max > data.length ? "No more posts to load" : "Load more"}
        </button>
      )}
    </div>
  );
};

export default LatestPosts;
