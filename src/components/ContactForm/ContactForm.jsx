import { addContact } from 'redux/Contacts/contactsSlice';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const number = e.target.number.value;
    const normalizedName = name.toLowerCase();

    if (isInContacts(normalizedName)) {
      alert(`${name} is already in Contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
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
