import styles from "./ToggleLoc.module.css";

export default function ToggleLoc() {
  return (
    <div className={styles.buttonsWrapper}>
      <button className={`${styles.toggleBtn} ${styles.activeBtn}`}>
        Approve Loc
      </button>
      <button className={styles.toggleBtn}>Decline Loc</button>
    </div>
  );
}
