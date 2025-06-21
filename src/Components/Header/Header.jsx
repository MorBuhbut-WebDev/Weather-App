import SearchBar from "./SearchBar/SearchBar.jsx";
import ToggleLoc from "./ToggleLoc/ToggleLoc.jsx";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <ToggleLoc />
      <SearchBar />
    </header>
  );
}
