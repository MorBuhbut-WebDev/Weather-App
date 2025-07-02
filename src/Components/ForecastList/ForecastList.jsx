import styles from "./ForecastList.module.css";
import ForecastCard from "./ForecastCard/ForecastCard.jsx";
import { useActiveSource } from "../../Context/WeatherProvider/WeatherProvider.jsx";

export default function ForecastList() {
  const activeState = useActiveSource();
  const forecastMap = activeState?.forecast?.map;

  return (
    <>
      {forecastMap && (
        <ul className={styles.forecastList}>
          {Object.entries(forecastMap).map(([time, forecastData]) => (
            <ForecastCard
              key={time}
              time={time}
              iconUrl={forecastData.iconUrl}
              temp={forecastData.temp}
            />
          ))}
        </ul>
      )}
    </>
  );
}
