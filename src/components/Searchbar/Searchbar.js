import styles from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm}>
        <button type="submit" className={styles.SearchForm__button}>
          <span className={styles.SearchForm__button_label}>Search</span>
        </button>

        <input
          className={styles.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
