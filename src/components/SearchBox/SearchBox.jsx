import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const findId = useId();

  return (
    <div className={css.container}>
      <label htmlFor={findId} className={css.text}>
        Find contacts by name:
      </label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        id={findId}
      />
    </div>
  );
}
