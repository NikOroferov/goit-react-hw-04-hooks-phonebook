import './Form.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const FORM_STATE = {
    name: name,
    number: number,
    id: id,
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setId(uuidv4());
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(FORM_STATE);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="submit__form" onSubmit={handleSubmit}>
      <label className="form__label">
        <h3>Name</h3>
        <input
          className="form__input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className="form__label">
        <h3>Number</h3>
        <input
          className="form__input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
}
