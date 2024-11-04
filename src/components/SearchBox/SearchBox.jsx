import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filters/filters";

export default function SearchBox() {
  const dispatch = useDispatch();

  const findId = useId();

  const setFilter = (e) => {
    console.log(e);
    const action = filterContacts(e);
    dispatch(action);
  };

  return (
    <div className={css.container}>
      <label htmlFor={findId} className={css.text}>
        Find contacts by name:
      </label>
      <input
        className={css.input}
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        id={findId}
      />
    </div>
  );
}
