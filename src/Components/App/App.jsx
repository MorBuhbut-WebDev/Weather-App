import { useEffect } from "react";
import styles from "./App.module.css";
import Header from "../Header/Header.jsx";
import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import ForecastList from "../ForecastList/ForecastList.jsx";

export default function App() {
  // Use Effect that setting the height of the screen to the actual visable part.
  useEffect(() => {
    const setVh = () => {
      const height = window.innerHeight * 0.01;
      document.documentElement.style.setProperty(
        "--mobileHeight",
        `${height}px`
      );
    };
    setVh();

    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <WeatherCard />
      <ForecastList />
    </div>
  );
}
