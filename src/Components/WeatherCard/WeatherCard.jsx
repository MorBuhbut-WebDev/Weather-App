import { useEffect } from "react";
import styles from "./WeatherCard.module.css";
import { useWeather } from "../../Context/WeatherProvider/WeatherProvider.jsx";
import { useLoadingContext } from "../../Context/LoadingProvider/LoadingProvider.jsx";
import { fetchWeeklyForecast } from "../../Api/weatherApi.js";

export default function WeatherCard() {
  const { weatherState, dispatch } = useWeather();
  const { loading, setLoading } = useLoadingContext();
  const isError = !weatherState.userLocation && !weatherState.selectedLocation;
  const selectedForecast =
    weatherState.forecast.obj[weatherState.selectedForecast];

  // Use Effect that fetches weekly forecast about the selected city / current location
  useEffect(() => {
    if (isError) return;

    setLoading(true);

    const getWeeklyForecast = async () => {
      let forecast;
      if (weatherState.selectedLocation)
        forecast = await fetchWeeklyForecast(
          weatherState.selectedLocation.lat,
          weatherState.selectedLocation.lon
        );
      else
        forecast = await fetchWeeklyForecast(
          weatherState.userLocation.lat,
          weatherState.userLocation.lon
        );

      dispatch({
        type: "UPDATE_FORECAST",
        payload: { city: forecast.city, obj: forecast.obj },
      });
      setLoading(false);
    };

    getWeeklyForecast();
  }, [weatherState.userLocation, weatherState.selectedLocation]);

  if (loading)
    return (
      <div className={styles.loadingIndicatorWrapper}>
        <div className={styles.loadingIndicator}></div>
      </div>
    );

  if (isError)
    return (
      <h1 className={styles.errorMsg}>
        Error, Pls Search For A city Or Apply Live Location
      </h1>
    );

  return (
    <>
      {weatherState.forecast.city && (
        <main className={styles.weatherCard}>
          <p className={styles.today}>{selectedForecast.date}</p>
          <p className={styles.cityName}>{weatherState.forecast.city}</p>
          <img
            src={selectedForecast.iconUrl}
            className={styles.weatherEmoji}
            alt="Weather Emoji"
          />
          <p className={styles.weatherDescription}>
            {selectedForecast.weatherDesc}
          </p>
          <p className={styles.cityTemp}>{selectedForecast.temp}</p>
          <div className={styles.metrics}>
            <p className={styles.humidity}>
              Humidity: <span>{selectedForecast.humidity}</span>
            </p>
            <p className={styles.windSpeed}>
              Wind Speed: <span>{selectedForecast.windSpeed}</span>
            </p>
          </div>
        </main>
      )}
    </>
  );
}
