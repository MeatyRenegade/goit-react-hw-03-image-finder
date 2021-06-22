import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.App}>{children}</div>;
};

export default Container;
