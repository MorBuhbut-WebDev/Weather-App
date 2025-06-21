import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <form className={styles.form}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search For Cities..."
      />
    </form>
  );
}
