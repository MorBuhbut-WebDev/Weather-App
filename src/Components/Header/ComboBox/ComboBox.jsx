import { useState, useRef } from "react";
import styles from "./ComboBox.module.css";
import {
  useDebounce,
  useSuggestions,
  useCloseSuggestions,
} from "./ComboBox.hooks.js";
import SuggetionList from "./SuggetionList/SuggetionList.jsx";

export default function ComboBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [citiesSuggestions, setCitiesSuggestions] = useState([]);
  const searchBarRef = useRef(null);
  const debouncedSearchTerm = useDebounce(searchTerm);
  const emptySearchBar = !debouncedSearchTerm.trim();

  useSuggestions(debouncedSearchTerm, emptySearchBar, setCitiesSuggestions);
  useCloseSuggestions(searchBarRef, setCitiesSuggestions);

  return (
    <div className={styles.combobox}>
      <input
        ref={searchBarRef}
        className={
          emptySearchBar
            ? `${styles.searchBar} ${styles.empty}`
            : styles.searchBar
        }
        type="text"
        value={searchTerm}
        placeholder="Search For Cities..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
          if (!e.target.value.trim()) setCitiesSuggestions([]);
        }}
      />
      {citiesSuggestions && (
        <SuggetionList citiesSuggestions={citiesSuggestions} />
      )}
    </div>
  );
}
