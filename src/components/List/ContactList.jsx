import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { requestContacts } from 'redux/ContactFormReducer';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <List>
      {contacts.map(({ name, number, id, phone }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number || phone}
          ></Contact>
        );
      })}
    </List>
  );
};
