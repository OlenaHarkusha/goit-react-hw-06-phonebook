import { Button, Contact, List } from './ContsctList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/contactsSlice';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {visibleContacts.map(item => (
        <Contact key={item.id}>
          {item.name}: {item.number}
          <Button
            type="button"
            id={item.id}
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  );
};
