import styles from "./ToggleLoc.module.css";
import { useState } from "react";
import { handleToggleLocation } from "./ToggleLoc.utils";
import { useLocationContext } from "../../../Context/LocationProvider/LocationProvider.jsx";

export default function ToggleLoc() {
  const [selectedOption, setSelectedOption] = useState("No");
  const { setCurrentLocation } = useLocationContext();

  return (
    <div className={styles.locationWrapper}>
      <p className={styles.labelMessage}>📍 Use My Location?</p>
      <div className={styles.buttonsWrapper}>
        <button
          className={
            selectedOption === "Yes"
              ? `${styles.toggleBtn} ${styles.activeBtn}`
              : styles.toggleBtn
          }
          aria-label="Approve Location Access"
          onClick={() =>
            handleToggleLocation(setSelectedOption, setCurrentLocation)
          }
          disabled={selectedOption === "Yes"}
        >
          Yes
        </button>
        <button
          className={
            selectedOption === "No"
              ? `${styles.toggleBtn} ${styles.activeBtn}`
              : styles.toggleBtn
          }
          aria-label="Decline Location Access"
          onClick={() =>
            handleToggleLocation(setSelectedOption, setCurrentLocation, false)
          }
          disabled={selectedOption === "No"}
        >
          No
        </button>
      </div>
    </div>
  );
}
