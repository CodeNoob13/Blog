import styles from "./gridComponent.module.css";

const GridComponent = ({ children, caption }) => {
  return (
    <>
      <h3
        className={styles.caption}
        style={caption ? { marginTop: "32px" } : { marginTop: "-64px" }}
      >
        {caption}
      </h3>
      <div className={styles.gridWrapper}>{children}</div>
    </>
  );
};

export default GridComponent;
