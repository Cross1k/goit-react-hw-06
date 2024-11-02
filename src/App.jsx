import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contacts/contacts";
import { filterContacts } from "./redux/filters/filters";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.filter);

  const visiblePersons = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const addPerson = (newPerson) => {
    const action = addContact(newPerson);
    dispatch(action);
  };

  const deletePerson = (personId) => {
    const action = deleteContact(personId);
    dispatch(action);
  };
  const setFilter = (value) => {
    console.log(value);
    const action = filterContacts(value);
    dispatch(action);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addPerson} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList list={visiblePersons} onDelete={deletePerson} />
    </div>
  );
}

export default App;
