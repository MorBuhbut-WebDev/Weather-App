import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const mockUpList = [
    { label: "Paris, Île-de-France, FR", lat: 48.8566, lon: 2.3522 },
    { label: "Paris, Île-de-France, FR", lat: 48.8566, lon: 2.3522 },
    { label: "Paris, Île-de-France, FR", lat: 48.8566, lon: 2.3522 },
    { label: "Paris, Île-de-France, FR", lat: 48.8566, lon: 2.3522 },
    { label: "Paris, Île-de-France, FR", lat: 48.8566, lon: 2.3522 },
  ];

  return (
    <div className={styles.combobox}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search For Cities..."
      />
      <ul className={styles.suggestionsList}>
        {mockUpList.map((item) => (
          <li key={item.label} className={styles.option} tabIndex={0}>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
