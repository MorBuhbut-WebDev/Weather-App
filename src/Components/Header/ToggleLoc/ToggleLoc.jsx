import styles from "./ToggleLoc.module.css";

export default function ToggleLoc() {
  return (
    <div className={styles.locationWrapper}>
      <p className={styles.labelMessage}>📍 Use My Location?</p>
      <div className={styles.buttonsWrapper}>
        <button
          className={`${styles.toggleBtn} ${styles.activeBtn}`}
          aria-label="Approve Location Access"
        >
          Yes
        </button>
        <button
          className={styles.toggleBtn}
          aria-label="Decline Location Access"
        >
          No
        </button>
      </div>
    </div>
  );
}
