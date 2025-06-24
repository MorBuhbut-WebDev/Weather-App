import styles from "./SuggetionList.module.css";
import Option from "./Option/Option.jsx";

export default function SuggetionList({ citiesSuggestions }) {
  return (
    <ul className={styles.suggestionsList}>
      {citiesSuggestions.map((item) => (
        <Option key={item.id} item={item} />
      ))}
    </ul>
  );
}
