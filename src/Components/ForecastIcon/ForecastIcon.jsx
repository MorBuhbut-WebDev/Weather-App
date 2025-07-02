import styles from "./ForecastIcon.module.css";

export default function ForecastIcon({ iconUrl }) {
  return (
    <img src={iconUrl} className={styles.weatherIcon} alt="Weather Emoji" />
  );
}
