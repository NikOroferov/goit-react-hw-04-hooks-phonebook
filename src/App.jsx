import { useEffect, useState } from 'react';
import './App.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import contactsList from './Contacts.json';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsList,
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const handleFormSubmit = data => {
    const exists = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());

    exists === undefined
      ? setContacts(state => state.concat(data))
      : alert(`${data.name} is alredy in the contacts list`);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const equalFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(equalFilter));
  };

  return (
    <div className="wrapper">
      <section className="section">
        <h1>Phonebook</h1>
        <Form onSubmit={handleFormSubmit} />
      </section>

      <section className="section">
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onInput={changeFilter}
          //
        />
        <Contacts
          contacts={getVisibleContacts()}
          handleDeleteContact={deleteContact}
          //
        />
      </section>
    </div>
  );
}
