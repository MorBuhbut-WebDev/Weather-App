import styles from "./Option.module.css";

export default function Option({ item: { label, lat, lon } }) {
  return (
    <li className={styles.option} tabIndex={0}>
      {label}
    </li>
  );
}
