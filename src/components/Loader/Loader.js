import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Loader__overlay}>
      <div className={styles.Loader}>
        <p className={styles.Loader__text}>l</p>
        <p className={styles.Loader__text}>o</p>
        <p className={styles.Loader__text}>a</p>
        <p className={styles.Loader__text}>d</p>
        <p className={styles.Loader__text}>i</p>
        <p className={styles.Loader__text}>n</p>
        <p className={styles.Loader__text}>g</p>
      </div>
    </div>
  );
};

export default Loader;
