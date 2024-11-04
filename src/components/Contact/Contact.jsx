import { BsPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/contacts";
import { useDispatch } from "react-redux";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const deletePerson = (personId) => {
    const action = deleteContact(personId);
    dispatch(action);
  };

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
      <button onClick={() => deletePerson(id)}>Delete</button>
    </>
  );
}
