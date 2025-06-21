import styles from "./ForecastList.module.css";
import ForecastCard from "./ForecastCard/ForecastCard.jsx";

export default function ForecastList() {
  const demoListDays = [
    { day: "Sunday", temp: "26°C", icon: "☀️" },
    { day: "Monday", temp: "26°C", icon: "☀️" },
    { day: "Tuesday", temp: "26°C", icon: "☀️" },
    { day: "Wednesday", temp: "26°C", icon: "☀️" },
    { day: "Thursday", temp: "26°C", icon: "☀️" },
    { day: "Today", temp: "26°C", icon: "☀️" },
    { day: "Saturday", temp: "26°C", icon: "☀️" },
  ];

  return (
    <ul className={styles.forecastList}>
      {demoListDays.map((item) => (
        <ForecastCard
          key={item.day}
          day={item.day}
          temp={item.temp}
          icon={item.icon}
        />
      ))}
    </ul>
  );
}
