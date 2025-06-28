import ComboBox from "./ComboBox/ComboBox.jsx";
import ToggleLoc from "./ToggleLoc/ToggleLoc.jsx";
import styles from "./Header.module.css";
import ComboBoxProvider from "../../Context/ComboBoxProvider/ComboBoxProvider.jsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <ToggleLoc />
      <ComboBoxProvider>
        <ComboBox />
      </ComboBoxProvider>
    </header>
  );
}
