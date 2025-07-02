import styles from "./Option.module.css";
import { useWeather } from "../../../../../Context/WeatherProvider/WeatherProvider.jsx";
import { useComboBoxContext } from "../../../../../Context/ComboBoxProvider/ComboBoxProvider.jsx";

export default function Option({ item: { label, lat, lon } }) {
  const { dispatch: comboBoxDispatch } = useComboBoxContext();
  const { dispatch: weatherDispatch } = useWeather();

  return (
    <li
      className={styles.option}
      tabIndex={0}
      onClick={() => {
        comboBoxDispatch({ type: "UPDATE_SEARCH_TERM", payload: label });
        comboBoxDispatch({ type: "UPDATE_SUGGESTION_LIST", payload: [] });
        weatherDispatch({ type: "UPDATE_ACTIVE_SOURCE", payload: "City" });
        weatherDispatch({
          type: "UPDATE_LOCATION",
          payload: { location: { lat, lon }, activeSource: "City" },
        });
      }}
    >
      {label}
    </li>
  );
}
