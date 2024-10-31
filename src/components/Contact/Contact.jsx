import { BsPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          <BsPersonFill className={css.icons} size={24} />
          {name}
        </p>
        <p className={css.text}>
          <BsTelephoneFill className={css.icons} size={24} /> {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
