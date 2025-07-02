import styles from "./ForecastCard.module.css";
import ForecastIcon from "../../ForecastIcon/ForecastIcon.jsx";
import {
  useActiveSource,
  useWeather,
} from "../../../Context/WeatherProvider/WeatherProvider.jsx";

export default function ForecastCard({ time, iconUrl, temp }) {
  const {
    forecast: { selectedTime },
  } = useActiveSource();

  const { dispatch } = useWeather();

  return (
    <li
      className={
        time === selectedTime
          ? `${styles.forecastCard} ${styles.selectedTime}`
          : `${styles.forecastCard}`
      }
      onClick={() => dispatch({ type: "UPDATE_SELECTED_TIME", payload: time })}
    >
      <p className={styles.time}>{time}</p>
      <ForecastIcon iconUrl={iconUrl} />
      <p className={styles.temp}>{temp}</p>
    </li>
  );
}
