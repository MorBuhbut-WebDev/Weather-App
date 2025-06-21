import styles from "./ForecastCard.module.css";

export default function ForecastCard({ day, temp, icon }) {
  return (
    <li
      className={
        day === "Today"
          ? `${styles.forecastCard} ${styles.selectedDay}`
          : `${styles.forecastCard}`
      }
    >
      <p className={styles.day}>{day}</p>
      <p className={styles.temp}>{temp}</p>
      <p className={styles.icon}>{icon}</p>
    </li>
  );
}
