import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ list, onDelete }) {
  return (
    <ul className={css.list}>
      {list.map((item) => (
        <li className={css.listItem} key={item.id}>
          <Contact data={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
