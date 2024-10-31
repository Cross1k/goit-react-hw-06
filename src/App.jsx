import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const InitialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const getInitialValues = () => {
    const savedValues = window.localStorage.getItem("persons-info");
    return savedValues != null ? JSON.parse(savedValues) : InitialState;
  };

  const [list, setList] = useState(getInitialValues);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("persons-info", JSON.stringify(list));
  }, [list]);

  const visiblePersons = list.filter((item) =>
    item.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  const addPerson = (newPerson) => {
    setList((prevList) => {
      return [...prevList, newPerson];
    });
  };

  const deletePerson = (personId) => {
    setList((prevList) => {
      return prevList.filter((item) => item.id !== personId);
    });
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
