import styles from "./WeatherCard.module.css";

export default function WeatherCard() {
  return (
    <main className={styles.weatherCard}>
      <p className={styles.today}>Friday, June 20</p>
      <p className={styles.cityName}>New York</p>
      <p className={styles.weatherEmoji} aria-label="Weather Emoji">
        ☀️
      </p>
      <p className={styles.weatherDescription}>Sunny</p>
      <p className={styles.cityTemp}>26°C</p>
      <div className={styles.metrics}>
        <p className={styles.humidity}>
          Humidity: <span>30%</span>
        </p>
        <p className={styles.windSpeed}>
          Wind Speed: <span>18km/h</span>
        </p>
      </div>
    </main>
  );
}
