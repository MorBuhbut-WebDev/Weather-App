import { useEffect } from "react";
import styles from "./WeatherCard.module.css";
import {
  useWeather,
  useActiveSource,
  useSelectedTime,
} from "../../Context/WeatherProvider/WeatherProvider.jsx";
import { useLoadingContext } from "../../Context/LoadingProvider/LoadingProvider.jsx";
import { fetchWeeklyForecast } from "../../Api/weatherApi.js";
import ForecastIcon from "../ForecastIcon/ForecastIcon.jsx";

export default function WeatherCard() {
  const { weatherState, dispatch } = useWeather();
  const { loading, setLoading } = useLoadingContext();
  const activeState = useActiveSource();
  const selectedTime = useSelectedTime();
  const isError = !weatherState.activeSource;

  // Use Effect that fetches weekly forecast about the selected city / current location
  useEffect(() => {
    if (isError) return;

    setLoading(true);

    const getWeeklyForecast = async () => {
      const forecast = await fetchWeeklyForecast(
        activeState.location.lat,
        activeState.location.lon
      );

      dispatch({
        type: "UPDATE_FORECAST",
        payload: {
          selectedTime: "Now",
          map: forecast.forecastMap,
          cityName: forecast.cityName,
        },
      });

      setLoading(false);
    };

    getWeeklyForecast();
  }, [weatherState.activeSource, weatherState.City.location]);

  if (loading)
    return (
      <div className={styles.loadingIndicatorWrapper}>
        <div className={styles.loadingIndicator}></div>
      </div>
    );

  if (isError || !selectedTime)
    return (
      <h1 className={styles.errorMsg}>
        Error, Pls Search For A city Or Apply Live Location
      </h1>
    );

  return (
    <main className={styles.weatherCard}>
      <p className={styles.date}>{selectedTime.date}</p>
      <p className={styles.cityName}>{activeState.forecast.cityName}</p>
      <ForecastIcon iconUrl={selectedTime.iconUrl} />
      <p className={styles.weatherDescription}>{selectedTime.weatherDesc}</p>
      <p className={styles.cityTemp}>{selectedTime.temp}</p>
      <div className={styles.metrics}>
        <p className={styles.humidity}>
          Humidity: <span>{selectedTime.humidity}</span>
        </p>
        <p className={styles.windSpeed}>
          Wind Speed: <span>{selectedTime.windSpeed}</span>
        </p>
      </div>
    </main>
  );
}
