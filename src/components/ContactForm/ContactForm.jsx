// import PropTypes from 'prop-types';
// import { useState } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = ({ addContact }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleInput = e => {
  //   switch (e.target.name) {
  //     case 'name':
  //       setName(e.target.value);
  //       break;
  //     case 'number':
  //       setNumber(e.target.value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   addContact({ name, number });
  //   setName('');
  //   setNumber('');
  // };
  const { contacts } = useSelector(state => state.contacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const normalizedName = name.toLowerCase();

    if (isInContacts(normalizedName)) {
      alert(`${name} is already in Contacts`);
      return;
    }
    dispatch(addContact(name, number));
    e.targrt.reset();
  };

  const isInContacts = name => {
    return contacts.some(item => item.name.toLowerCase().includes(name));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
