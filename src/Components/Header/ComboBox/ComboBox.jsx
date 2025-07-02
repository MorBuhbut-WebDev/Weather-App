import { useRef, useEffect } from "react";
import styles from "./ComboBox.module.css";
import { fetchGeoLocation } from "../../../Api/weatherApi.js";
import { useDebounce } from "./ComboBox.hooks.js";
import SuggetionList from "./SuggetionList/SuggetionList.jsx";
import { useComboBoxContext } from "../../../Context/ComboBoxProvider/ComboBoxProvider.jsx";
import { useWeather } from "../../../Context/WeatherProvider/WeatherProvider.jsx";

export default function ComboBox() {
  const {
    comboBoxState: { searchTerm, citiesSuggestions },
    dispatch: dispatchComboBox,
  } = useComboBoxContext();

  const {
    dispatch: dispatchWeather,
    weatherState: {
      User: { location: userLocation },
      City: { location: selectedLocation },
    },
  } = useWeather();

  const searchBarRef = useRef(null);
  const debouncedSearchTerm = useDebounce(searchTerm);

  // Use Effect that fetches the list of suggestions for the searched city
  useEffect(() => {
    const getSuggestions = async () => {
      const suggestions = await fetchGeoLocation(debouncedSearchTerm);
      dispatchComboBox({
        type: "UPDATE_SUGGESTION_LIST",
        payload: suggestions,
      });
    };

    if (!selectedLocation) getSuggestions();
  }, [debouncedSearchTerm]);

  // Use Effect that makes the suggestion list close when the user clicks outside of the search bar
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target === searchBarRef.current) return;
      dispatchComboBox({ type: "UPDATE_SUGGESTION_LIST", payload: [] });
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className={styles.combobox}>
      <input
        ref={searchBarRef}
        className={
          !debouncedSearchTerm.trim()
            ? `${styles.searchBar} ${styles.empty}`
            : styles.searchBar
        }
        type="text"
        value={searchTerm}
        placeholder="Search For Cities..."
        onChange={(e) => {
          dispatchComboBox({
            type: "UPDATE_SEARCH_TERM",
            payload: e.target.value,
          });
          if (!e.target.value.trim()) {
            dispatchWeather({
              type: "UPDATE_LOCATION",
              payload: { location: null, activeSource: "City" },
            });
            if (userLocation)
              dispatchWeather({
                type: "UPDATE_ACTIVE_SOURCE",
                payload: "User",
              });
            else
              dispatchWeather({ type: "UPDATE_ACTIVE_SOURCE", payload: null });
            e.target.blur();
          }
        }}
      />
      {citiesSuggestions && <SuggetionList />}
    </div>
  );
}
