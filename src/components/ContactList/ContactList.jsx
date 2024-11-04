import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.filter);

  const visiblePersons = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <ul className={css.list}>
      {visiblePersons.map((item) => (
        <li className={css.listItem} key={item.id}>
          <Contact data={item} />
        </li>
      ))}
    </ul>
  );
}
