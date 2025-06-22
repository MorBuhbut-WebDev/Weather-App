import styles from "./App.module.css";
import Header from "../Header/Header.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ForecastList from "../ForecastList/ForecastList.jsx";
import { useMobileHeight } from "./App.hooks.js";

export default function App() {
  useMobileHeight();

  return (
    <div className={styles.page}>
      <Header />
      <WeatherCard />
      <ForecastList />
    </div>
  );
}
