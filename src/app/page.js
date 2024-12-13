import GridComponent from "./components/gridComponent/GridComponent";
import HeroSection from "./components/heroSection/HeroSection";
import LatestPosts from "./components/latestPosts/LatestPosts";
import LoadMoreButton from "./components/loadMoreButton/LoadMoreButton";
import SinglePostCard from "./components/singlePostCard/SinglePostCard";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection
        block={true}
        image="/HeroImage.jpg"
        altText="Hero image"
        category="Technology"
        title="The Impact of Technology on the Workplace: How Technology is
            Changing"
      />
      <LatestPosts />
    </div>
  );
}
