import styles from "./ToggleLoc.module.css";
import { useState } from "react";
import { handleToggleLocation } from "./ToggleLoc.utils";
import { useWeather } from "../../../Context/WeatherProvider/WeatherProvider.jsx";

export default function ToggleLoc() {
  const [selectedOption, setSelectedOption] = useState("No");
  const { weatherState, dispatch } = useWeather();
  const activeToggle = `${styles.toggleBtn} ${styles.activeBtn}`;
  const disabledToggle = styles.toggleBtn;

  return (
    <div className={styles.locationWrapper}>
      <p className={styles.labelMessage}>📍 Use My Location?</p>
      <div className={styles.buttonsWrapper}>
        <button
          className={selectedOption === "Yes" ? activeToggle : disabledToggle}
          aria-label="Approve Location Access"
          onClick={() =>
            handleToggleLocation(
              weatherState,
              dispatch,
              setSelectedOption,
              true
            )
          }
          disabled={selectedOption === "Yes"}
        >
          Yes
        </button>
        <button
          className={selectedOption === "No" ? activeToggle : disabledToggle}
          aria-label="Decline Location Access"
          onClick={() =>
            handleToggleLocation(
              weatherState,
              dispatch,
              setSelectedOption,
              false
            )
          }
          disabled={selectedOption === "No"}
        >
          No
        </button>
      </div>
    </div>
  );
}
