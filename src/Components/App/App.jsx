import styles from "./App.module.css";
import Header from "../Header/Header.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";

export default function App() {
  return (
    <div className={styles.page}>
      <Header />
      <WeatherCard />
    </div>
  );
}
