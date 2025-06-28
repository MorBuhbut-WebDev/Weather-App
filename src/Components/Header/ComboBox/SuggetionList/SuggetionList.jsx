import styles from "./SuggetionList.module.css";
import Option from "./Option/Option.jsx";
import { useComboBoxContext } from "../../../../Context/ComboBoxProvider/ComboBoxProvider.jsx";

export default function SuggetionList() {
  const {
    comboBoxState: { citiesSuggestions },
  } = useComboBoxContext();

  return (
    <ul className={styles.suggestionsList}>
      {citiesSuggestions.map((item) => (
        <Option key={item.id} item={item} />
      ))}
    </ul>
  );
}
